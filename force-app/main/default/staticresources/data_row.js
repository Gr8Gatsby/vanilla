class DataRow extends HTMLElement {
    constructor(){
        super();

        // Create a shadow DOM for encapsulation
        var template = this.attachShadow({mode:'open'});

        // Append to DOM
        template.innerHTML = `
            <style>
                .nameSpan{
                    font-weight: bolder;
                }
                .fmid{
                    margin-right: 5px;
                    color: gray;
                }
            </style>
            <div>
            </div>
        `;
    }

    handleCellUpdate(evt) {
        evt.preventDefault();
        let record = new SObjectModel.Market();

        

        //var record = new SObjectModel.Market();
        //debugger
        //record.update()
        // record.update($j('#contactId').val(),
        // {
        //     FirstName: $j('#fName').val(),
        //     LastName: $j('#lName').val(),
        //     Phone: $j('#phone').val(),
        //     Notes: $j('#notes').val()
        // });
    }

    connectedCallback() {
        // get reference to Shadow Root
        let root = this.shadowRoot.getRootNode();

        // Get attributes
        let cells = this.getAttributeNames();
        let anchor = root.querySelector('div');

        this.handleCellUpdateCallback = this.handleCellUpdate.bind(this);
        anchor.addEventListener('cellUpdate', this.handleCellUpdateCallback);

        let cols = JSON.parse(this.getAttribute('cols'))
        let vals = JSON.parse(this.getAttribute('values'));
        // Create cells for each row attribute
        if(cols != null) {
            [...cols].forEach( (cell) => {
                    let cellElement = document.createElement('data-cell');
                    cellElement.setAttribute("value", vals[cell.name]);
                    cellElement.setAttribute("editable", cell.editable);
                    cellElement.setAttribute("display", cell.display);

                    anchor.appendChild(cellElement);
                }
            )
        }
    }

    disconnectedCallback(){
        // get reference to Shadow Root
        let root = this.shadowRoot.getRootNode();
        let anchor = root.querySelector('div');

        anchor.removeEventListener('cellUpdate', this.handleCellUpdateCallback);
    }
}
// Register the custom element
customElements.define('data-row', DataRow);
