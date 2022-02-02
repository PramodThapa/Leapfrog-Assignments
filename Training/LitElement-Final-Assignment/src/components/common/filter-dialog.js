import { LitElement, html, css } from 'lit';
import '@polymer/paper-input/paper-input.js';
export class FilterText extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
        }
        paper-input {
          padding: 5px 10px 5px 10px;
        }
        h3 {
          padding: 5px 10px 0px 10px;
        }
        .dropdown-content {
          padding: 0px 10px 0px 10px;
        }
        paper-button {
          display: block;
          padding: 8px 0px 8px 0px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      dialogHeader: { type: String },
      label: { type: String },
      listData: { type: Array },
      filterListData: { type: Array },
      handleFilterSelect: { type: Function },
    };
  }

  constructor() {
    super();
    this.listData = [];
    this.filterListData = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterListData = this.listData;
  }

  filterList(e) {
    let filteredData = [];

    this.listData.map((item) => {
      if (item.toLowerCase().startsWith(e.target.value)) {
        filteredData.push(item);
      }
    });
    this.filterListData = [...filteredData];

    console.log(this.filterListData);
  }
 
 
  render() {
    return html` <h3>${this.dialogHeader}</h3>
      <paper-input @input=${(e) => this.filterList(e)} label="${this.label}">
      </paper-input>
      <paper-listbox class="dropdown-content">
        ${this.filterListData.map(
          (item) =>
            html`<paper-button id=${item} @click=${(e) => this.handleFilterSelect(e)} noink
              >${item}</paper-button
            >`
        )}
      </paper-listbox>`;
  }
}

customElements.define('filter-dialog', FilterText);
