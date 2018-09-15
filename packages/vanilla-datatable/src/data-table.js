/**
 * A data-table. Declaratively specify the columns. Set the data property with the row data.
 *
 * <data-table page-size='20' object-name='Market'>
 *   <data-column field='FMID__c' label='Market Id' editable='false'></data-column>
 *   <data-column field='Name' label='Name' editable='true'></data-column>
 *   <data-column field='City' label='City' editable='true'></data-column>
 * </data-table>
 * <script>
 *  document.querySelector('data-table').data = [ { FMDID__c: 1, Name: 'Weekend Market', City: 'San Francisco' }]
 * </script>
 */
export default class DataTable extends HTMLElement {
    constructor() {
        super();

        // Create a shadow DOM for encapsulation
        var template = this.attachShadow({ mode: 'open' });

        // create and populate the shadow dom
        template.innerHTML = `
            <style>
                .table {
                    border: 1px solid red;
                    padding: 5px;
                    text-align: center;
                }
            </style>
            <div class='table'>
                <slot></slot>
                <div class='body'></div>
            </div>
        `;
    }

    // getter-setter for row data
    set data(value) {
        this._data = value;
        this.render();
    }
    get data() {
        return this._data || [];
    }

    connectedCallback() {
        const slot = this.shadowRoot.getRootNode().querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.columns = this.calculateColumns();
            this.render();
        });
    }

    calculateColumns() {
        const dataColumns = Array.prototype.slice.call(this.querySelectorAll('data-column'));
        const columns = dataColumns.map(column => {
            const field = column.field;
            const label = column.label;
            const editable = column.editable;
            return { field, label, editable };
        });
        return columns;
    }

    render() {
        // clear all children
        const target = this.shadowRoot.getRootNode().querySelector('div.body');
        while (target.firstChild) {
            target.removeChild(target.firstChild);
        }
        // append new children
        this.data.forEach(row => {
            const rowElement = document.createElement('data-row');
            const cellElements = this.columns.map(column => {
                const cellElement = document.createElement('data-cell');
                cellElement.field = column.field;
                cellElement.value = row[column.field];
                cellElement.editable = column.editable;
                return cellElement;
            });
            cellElements.forEach(cellElement => {
                rowElement.appendChild(cellElement);
            });
            target.appendChild(rowElement);
        });
    }
}
