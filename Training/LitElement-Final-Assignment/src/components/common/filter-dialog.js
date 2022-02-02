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

  /**
   * get the proporties
   *
   * @type {Function}
   *
   * @returns {Object}
   *
   * dialogHeader || @type {String} Header of the dialog box
   *
   * label || @type {String} label of the search input box
   *
   * listData || @type {Array} list of the crossponding table column to filter
   *
   * filterListData || @type {Array}  filtered  list data of crosspnding column
   *
   * handleFilterSelect || @type {Array} callback function passed to the filter-dialog, execute when individual list is selected
   */
  static get properties() {
    return {
      dialogHeader: { type: String },
      label: { type: String },
      listData: { type: Array },
      filterListData: { type: Array },
      handleFilterSelect: { type: Function },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
    this.listData = [];
    this.filterListData = [];
  }

  /**
   * life cycle method
   *
   * set filterlist data to to orginal list data
   */
  connectedCallback() {
    super.connectedCallback();
    this.filterListData = this.listData;
  }

  /**
   *
   * @param {*} e || event
   *
   * sets filterListData crossponding to the input given to search field
   */
  filterList(e) {
    let filteredData = [];

    this.listData.map((item) => {
      if (item.toLowerCase().startsWith(e.target.value)) {
        filteredData.push(item);
      }
    });
    this.filterListData = [...filteredData];
  }

  /**
   * 
   * @returns html to render
   */

  render() {
    return html` <h3>${this.dialogHeader}</h3>
      <paper-input @input=${(e) => this.filterList(e)} label="${this.label}">
      </paper-input>
      <paper-listbox class="dropdown-content">
        ${this.filterListData.map(
          (item) =>
            html`<paper-button
              id=${item}
              @click=${(e) => this.handleFilterSelect(e)}
              noink
              >${item}</paper-button
            >`
        )}
      </paper-listbox>`;
  }
}

/**
 * Register the component as filter-dialog
 */
customElements.define('filter-dialog', FilterText);
