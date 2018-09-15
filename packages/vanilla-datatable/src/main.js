import DataTable from "./data-table";
import DataColumn from "./data-column";
import DataRow from "./data-row";
import DataCell from "./data-cell";

// Register the custom elements
customElements.define("data-table", DataTable);
customElements.define("data-column", DataColumn);
customElements.define("data-row", DataRow);
customElements.define("data-cell", DataCell);
