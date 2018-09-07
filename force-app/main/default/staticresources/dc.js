class DataCell extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML='\n            <style>\n                .value {\n                    margin-left: 5px;\n                    padding: 2px;\n                    border:none;\n                    flex: 5;\n                }\n\n                .edit {\n                    margin-left: 5px;\n                    padding: 2px;\n                    border: none;\n                    color: white;\n                    border-bottom: 2px #FF3F91 solid;\n                    flex: 5;\n                    background-color: hotpink;\n                }\n            </style>\n            <input class="value" readonly/>\n        '}saveChanges(e,t){e.setAttribute("class","value"),e.readOnly=!0;const l={label:this.label,value:t},a=new CustomEvent("cellUpdate",{bubbles:!0,detail:l});this.dispatchEvent(a)}handleDoubleClick(e){this.editable&&(e.target.readOnly=!1,e.target.setAttribute("class","edit"))}handleBlur(e){!1===e.target.readOnly&&this.saveChanges(e.target,e.target.value.trim())}handleKeyDownInput(e){"Enter"===e.key&&!1===e.target.readOnly&&this.saveChanges(e.target,e.target.value.trim())}connectedCallback(){let e=this.shadowRoot.getRootNode().querySelector("input"),t=this.getAttributeNames();this.editable=this.getAttribute("editable"),"false"===this.editable?this.editable=!1:this.editable=!0,this.label=t[0],this.value=this.getAttribute(this.label),"undefined"!=this.value&&(e.value=this.value),this.editable&&(this.handleDoubleClickCallback=this.handleDoubleClick.bind(this),this.handleBlurCallback=this.handleBlur.bind(this),this.handleKeyDownInputCallback=this.handleKeyDownInput.bind(this),e.addEventListener("dblclick",this.handleDoubleClickCallback),e.addEventListener("blur",this.handleBlurCallback),e.addEventListener("keydown",this.handleKeyDownInputCallback))}disconnectedCallback(){if(this.editable){let e=this.shadowRoot.getRootNode().querySelector("input");e.removeEventListener("dblclick",this.handleDoubleClickCallback),e.removeEventListener("blur",this.handleBlurCallback),e.removeEventListener("keydown",this.handleKeyDownInputCallback)}}}customElements.define("data-cell",DataCell);