export default class DataRow extends HTMLElement {
  constructor() {
    super();

    this.columns = [];
    this.data = {};

    // Create a shadow DOM for encapsulation
    const template = this.attachShadow({ mode: "open" });

    // Append to DOM
    template.innerHTML = `
            <style>
                .nameSpan {
                    font-weight: bolder;
                }
                .fmid {
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
  }

  connectedCallback() {
    // get reference to Shadow Root
    const root = this.shadowRoot.getRootNode();

    const target = root.querySelector("div");

    // listen for updates
    this.handleCellUpdateCallback = this.handleCellUpdate.bind(this);
    target.addEventListener("cellUpdate", this.handleCellUpdateCallback);

    this.columns.forEach(column => {
      const cell = document.createElement("data-cell");
      cell.setAttribute("value", this.data[cell.name]);
      cell.setAttribute("editable", this.data.editable);
      cell.setAttribute("display", cell.display);
      target.appendChild(cell);
    });
    let cols = JSON.parse(this.getAttribute("cols"));
    let vals = JSON.parse(this.getAttribute("values"));
    // Create cells for each row attribute
    if (cols != null) {
      [...cols].forEach(cell => {
        let cellElement = document.createElement("data-cell");
        cellElement.setAttribute("value", vals[cell.name]);
        cellElement.setAttribute("editable", cell.editable);
        cellElement.setAttribute("display", cell.display);
        anchor.appendChild(cellElement);
      });
    }
  }

  disconnectedCallback() {
    // get reference to Shadow Root
    const root = this.shadowRoot.getRootNode();
    const anchor = root.querySelector("div");
    anchor.removeEventListener("cellUpdate", this.handleCellUpdateCallback);
  }
}
// Register the custom element
customElements.define("data-row", DataRow);
