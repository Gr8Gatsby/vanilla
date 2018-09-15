/**
 * A row in the data table.
 *
 * <data-row></data-row>
 */
export default class DataRow extends HTMLElement {
    constructor() {
        super();

        // create and populate the shadow dom
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <style>
                slot { display: block; }
            </style>
            <slot></slot>
        `;
    }
}
