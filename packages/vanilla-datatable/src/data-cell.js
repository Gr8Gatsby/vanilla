/**
 * A cell in the data table.
 *
 * <data-cell field='FMID__c' value='value of field' editable='true'></data-cell>
 */
export default class DataCell extends HTMLElement {
    constructor() {
        super();

        // create bound version of handlers
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        // create and populate the shadow dom
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .view {
                    margin-left: 5px;
                    padding: 2px;
                    border:none;
                    flex: 5;
                }
                .edit {
                    margin-left: 5px;
                    padding: 2px;
                    border: none;
                    color: white;
                    border-bottom: 2px #FF3F91 solid;
                    flex: 5;
                    background-color: hotpink;
                }
            </style>
            <input class='view' readonly/>
        `;
    }

    // properties are reflected as attributes. attribute values are
    // the source of truth.
    get id() {
        return Number(this.getAttribute('id'));
    }
    set id(value) {
        this.setAttribute('id', value);
    }

    get field() {
        return this.getAttribute('field');
    }
    set field(value) {
        this.setAttribute('field', value);
    }

    get value() {
        return this.getAttribute('value');
    }
    set value(value) {
        if (value == null) {
            value = '';
        }
        this.setAttribute('value', value);
    }

    get editable() {
        if (!this.hasAttribute('editable')) {
            return false;
        }
        return this.getAttribute('editable') === 'true';
    }
    set editable(value) {
        this.setAttribute('editable', value ? 'true' : 'false');
    }

    // watch for changes to 'value'
    static get observedAttributes() {
        return ['value'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
            // update the shadow <input>'s value
            this._inputElement.value = newValue;
        }
    }

    // gets the shadow <input>
    get _inputElement() {
        return this.shadowRoot.getRootNode().querySelector('input');
    }

    // sets edit mode: enable or disable readonly mode of shadow <input>
    setEditMode(enabled) {
        const input = this._inputElement;
        input.readOnly = !enabled;
        input.setAttribute('class', enabled ? 'edit' : 'view');
    }

    // double click enters edit mode
    handleDoubleClick() {
        if (this.editable) {
            this.setEditMode(true);
        }
    }

    // blur exits edit mode
    handleBlur() {
        if (this.editable) {
            this.setEditMode(false);
        }
    }

    // change triggers save
    handleChange() {
        if (this.editable) {
            this.dispatchSave();
        }
    }

    // [enter] exits edit mode
    handleKeyDown(evt) {
        if (evt.key === 'Enter' && this.editable) {
            this.setEditMode(false);
        }
    }

    dispatchSave() {
        const newValue = this._inputElement.value.trim();
        if (newValue !== this.value) {
            // prepare event
            const detail = { id: this.id, field: this.field, value: newValue };
            const event = new CustomEvent('change', { bubbles: true, composed: true, detail });
            this.dispatchEvent(event);
        }
    }

    connectedCallback() {
        const input = this._inputElement;
        input.addEventListener('dblclick', this.handleDoubleClick);
        input.addEventListener('blur', this.handleBlur);
        input.addEventListener('change', this.handleChange);
        input.addEventListener('keydown', this.handleKeyDown);
    }

    disconnectedCallback() {
        const input = this._inputElement;
        input.removeEventListener('dblclick', this.handleDoubleClick);
        input.removeEventListener('blur', this.handleBlur);
        input.removeEventListener('change', this.handleChange);
        input.removeEventListener('keydown', this.handleKeyDown);
    }
}
