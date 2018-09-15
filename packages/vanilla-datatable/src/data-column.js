/**
 * A column definition (and header) in the data table.
 *
 * <data-column field='FMID__c' label='Market Id' editable='false'></data-column>
 */
export default class DataColumn extends HTMLElement {
    constructor() {
        super();

        // create and populate the shadow dom
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <data-cell field="" value="" editable="false"></data-cell>
        `;
    }

    // properties are reflected as attributes. attribute values are
    // the source of truth.
    get field() {
        return this.getAttribute('field');
    }

    get label() {
        return this.getAttribute('label');
    }

    get editable() {
        if (!this.hasAttribute('editable')) {
            return false;
        }
        return this.getAttribute('editable') === 'true';
    }

    // gets the shadow <data-cell>
    get _cellElement() {
        return this.shadowRoot.getRootNode().querySelector('data-cell');
    }

    connectedCallback() {
        const target = this.shadowRoot.getRootNode().querySelector('data-cell');
        target.field = this.field;
        target.value = this.label;
    }
}
