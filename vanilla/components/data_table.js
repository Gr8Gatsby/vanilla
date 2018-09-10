class DataTable extends HTMLElement {
    constructor(){
        super();

        // Create a shadow DOM for encapsulation
        var template = this.attachShadow({mode:'open'});

        // Append to DOM
        template.innerHTML = `
            <style>
                .dataTable{
                    border: 1px solid red;
                    padding: 5px;
                    text-align: center;
                }
            </style>
            <slot></slot>
            <slot name="table">
                <div class="dataTable"></div>
            </slot>
        `;
    }

    // Component lifecycle events
    connectedCallback() {
       
        const slot = this.shadowRoot.getRootNode().querySelector('slot');
        
        slot.addEventListener('slotchange', function(e) {    
            const nodes = slot.assignedElements();
            const cols = [];
            nodes.forEach( column =>  {
                let editable = column.attributes["data-editable"].value; 
                let display = column.attributes["display-name"].value;
                let name = column.attributes["name"].value; 
                cols.push({"name":name,"display":display,"editable":editable});
            })
            this.drawHeader(cols);
            //this.drawRows(cols);
        }.bind(this));
    }

    drawHeader(cols){

        let holder = this.shadowRoot.getRootNode().querySelector('div.dataTable');

        var row = document.createElement('data-row');
        
        cols.forEach( (cell) => {
            let cellElement = document.createElement('data-cell');
            cellElement.setAttribute("value", cell.display);
            cellElement.setAttribute("editable", false);
            cellElement.setAttribute("display", cell.display);

            row.shadowRoot.appendChild(cellElement);
        })
        row.setAttribute('recordId', null);
        holder.appendChild(row);
        this.drawRows(cols);

    }

    drawRows(cols){
        let objectName = this.getAttribute('object-name');
        let pageSize = Number(this.getAttribute('page-size'));
        let holder = this.shadowRoot.getRootNode().querySelector('div.dataTable');
        let so = undefined;
        try{
            so = new SObjectModel[objectName];
        } catch {
            
        }
        // Use the Remote Object to query for pageSize records
        if(so != undefined) {
            so.retrieve({
                limit : pageSize
            }, function(err, records){
                if(err) throw new Error(err.message);
                else {
                    records.forEach(function(record) {
                        var row = document.createElement('data-row');
                        row.setAttribute('recordId', record.get('Id'));
                        row.setAttribute('cols', JSON.stringify(cols));
                        row.setAttribute('values', JSON.stringify(record._props));
                        holder.appendChild(row);
                    });
                }
                return [];
            });
        } else {
            testRecords.forEach(function(record) {
                var row = document.createElement('data-row');
                row.setAttribute('recordId', record._props.Id);
                row.setAttribute('cols', JSON.stringify(cols));
                row.setAttribute('values', JSON.stringify(record._props));
                holder.appendChild(row);
            });
        }
    }
}
// Register the custom element
customElements.define('data-table', DataTable);
