class DataCell extends HTMLElement {
    constructor(){
        super();

        // Create a shadow DOM for encapsulation
        var template = this.attachShadow({mode:'open'});
    
        // Append to DOM
        template.innerHTML = `
            <style>
                .value {
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
            <input class="value" readonly/>
        `;
    }

    saveChanges(obj, value){

        // reset the HTML input to be readOnly
        obj.setAttribute('class', 'value');
        obj.readOnly = true;

        // prepare event
        const detail = { 'label':this.label, 'value':value };
        const event = new CustomEvent('cellUpdate', { bubbles:true, detail });
        this.dispatchEvent(event);
    }

    handleDoubleClick(evt) {
        if(this.editable) {
            evt.target.readOnly = false;
            evt.target.setAttribute('class', 'edit');
        }
    }

    handleBlur(evt) {
        if (evt.target.readOnly === false) {
            this.saveChanges(evt.target, evt.target.value.trim());
        }
    }

    handleKeyDownInput(evt) {
        if (evt.key === 'Enter' && evt.target.readOnly === false) {
            this.saveChanges(evt.target, evt.target.value.trim());
        }
    }

    //  Lifecycle Events
    connectedCallback() {
        let field = this.shadowRoot.getRootNode().querySelector('input');
        let cells = this.getAttributeNames();

        this.editable = this.getAttribute('editable');

        if(this.editable === "false") {
            this.editable = false;
        } else {
            this.editable = true;
        }

        // Set the label & value for the cell
        this.label = cells[0];
        this.value = this.getAttribute(this.label);
        if(this.value != 'undefined') {
            field.value = this.value;
        }

        // Only add the editing events if the field can be edited
        if(this.editable) {
            this.handleDoubleClickCallback = this.handleDoubleClick.bind(this);
            this.handleBlurCallback = this.handleBlur.bind(this);
            this.handleKeyDownInputCallback = this.handleKeyDownInput.bind(this);
            field.addEventListener('dblclick', this.handleDoubleClickCallback);
            field.addEventListener('blur', this.handleBlurCallback);
            field.addEventListener('keydown', this.handleKeyDownInputCallback);
        }
    }

    disconnectedCallback(){
        // Only remove the editing events if the field can be edited
        if(this.editable) {
            let field = this.shadowRoot.getRootNode().querySelector('input');
            field.removeEventListener('dblclick', this.handleDoubleClickCallback);
            field.removeEventListener('blur', this.handleBlurCallback);
            field.removeEventListener('keydown', this.handleKeyDownInputCallback);
        }
    }
}
// Register the custom element
customElements.define('data-cell', DataCell);
