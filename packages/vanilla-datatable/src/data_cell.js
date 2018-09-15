/**
 * A cell in the data table.
 * Eg <data-cell field="fieldDevName" value="value of field" editable="true"></data-cell>
 */
export default class DataCell extends HTMLElement {
  constructor() {
    super();

    // create bound version of handlers
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    // Create a shadow DOM for encapsulation
    var template = this.attachShadow({ mode: "open" });

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

  // properties are reflected as attributes. attribute values are
  // the source of truth.
  get field() {
    return this.getAttribute("field");
  }
  set field(value) {
    this.setAttribute("field", value);
  }

  get value() {
    return this.getAttribute("value");
  }
  set value(value) {
    this.setAttribute("value", value);
  }

  get editable() {
    if (!this.hasAttribute("editable")) {
      return false;
    }
    return this.getAttribute("editable") === "true";
  }
  set editable(value) {
    this.setAttribute("value", value ? "true" : "false");
  }

  // watch for changes to 'value'
  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "value") {
      // update the shadow <input>'s value
      this._inputElement.value = newValue;
    }
  }

  // gets the shadow <input>
  get _inputElement() {
    return this.shadowRoot.getRootNode().querySelector("input");
  }

  // sets edit mode: enable or disable readonly mode of shadow <input>
  setEditMode(enabled) {
    const input = this._inputElement;
    input.readOnly = !enabled;
    input.setAttribute("class", enabled ? "edit" : "");
  }

  // double click enters edit mode
  handleDoubleClick() {
    if (this.editable) {
      this.setEditMode(true);
    }
  }

  // blur exits edit mode, saving any change
  handleBlur() {
    if (this.editable) {
      this.setEditMode(false);
      this.dispatchSave();
    }
  }

  // [enter] exits edit mode, saving any change
  handleKeyDown(evt) {
    if (evt.key === "Enter" && this.editable) {
      this.setEditMode(false);
      this.dispatchSave();
    }
  }

  dispatchSave() {
    const newValue = this._inputElement.value.trim();
    if (newValue !== this.value) {
      // prepare event
      const detail = { field: this.field, value: newValue };
      const event = new CustomEvent("save", { bubbles: true, detail });
      this.dispatchEvent(event);
    }
  }

  connectedCallback() {
    const input = this._inputElement;
    input.addEventListener("dblclick", this.handleDoubleClick);
    input.addEventListener("blur", this.handleBlur);
    input.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback() {
    const input = this._inputElement;
    input.removeEventListener("dblclick", this.handleDoubleClick);
    input.removeEventListener("blur", this.handleBlur);
    input.removeEventListener("keydown", this.handleKeyDown);
  }
}
