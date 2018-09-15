// include the 3 web components, which results in their registration
import DataTable from "./data_table";
import DataRow from "./data_row";
import DataCell from "./data_cell";

// Register the custom elements
customElements.define("data-cell", DataCell);
