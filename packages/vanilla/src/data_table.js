export default class DataTable extends HTMLElement {
  constructor() {
    super();

    this._cololums = [];
    this._data = [];

    // Create a shadow DOM for encapsulation
    var template = this.attachShadow({ mode: "open" });

    // Append to DOM
    template.innerHTML = `
            <style>
                .dataTable {
                    border: 1px solid red;
                    padding: 5px;
                    text-align: center;
                }
            </style>
            <slot></slot>
            <slot name='table'>
                <div class='dataTable'></div>
            </slot>
        `;
  }

  set data(value) {
    this._data = value;
    this.render();
  }
  get data() {
    return this._data;
  }

  // Component lifecycle events
  connectedCallback() {
    const slot = this.shadowRoot.getRootNode().querySelector("slot");
    slot.addEventListener("slotchange", () => {
      const columns = [];
      slot.assignedElements().forEach(column => {
        const editable = column.getAttribute("editable");
        const display = column.getAttribute("display-name");
        const field = column.getAttribute("field");
        columns.push({ field, display, editable });
      });
      this.columns = columns;
      this.render();
    });
  }

  getTarget() {
    return this.shadowRoot.getRootNode().querySelector("div.dataTable");
  }

  render() {
    // clear all children
    const target = this.getTarget();
    while (target.firstChild) {
      target.removeChild(box.firstChild);
    }
    this.appendHeader();
    this.appendRows();
  }

  appendHeader() {
    const row = document.createElement("data-row");
    row.columns = this.columns.map(column =>
      Object.assign({}, column, { editable: false })
    );
    row.data = this.columns.reduce((acc, column) => {
      acc[column.name] = column.display;
    }, {});
    const target = this.getTarget();
    target.appendChild(row);
  }

  appendRows() {
    const target = this.getTarget();
    this.data.forEach(data => {
      const row = document.createElement("data-row");
      row.columns = this.columns;
      row.data = data;
      target.appendChild(row);
    });
  }
}
// Register the custom element
customElements.define("data-table", DataTable);
