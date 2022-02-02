import { LitElement, html, css } from 'lit';
import { render } from 'lit-html';
import { classMap } from 'lit/directives/class-map.js';
import {
  requestID,
  requestedBY,
  assignee,
  project,
} from '../services/table-data.js';
import './common/filter-dialog';
import './common/filter-item';
import './edit-item';
import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-selection-column.js';
import '@vaadin/grid/vaadin-grid-filter-column.js';
import '@vaadin/grid/vaadin-grid-sort-column.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/editor-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button-light.js';

export class TableComponent extends LitElement {
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
        }
        paper-dialog {
          position: fixed;
          top: 0px;
          left: 0px;
          box-shadow: 1px 1px 4px;
        }
        paper-button {
          padding: 10px;
          margin: 0px;
        }
        .edit-icon {
          padding: 2px;
          height: 20px;
        }
        .queued {
          color: #ff8c00;
        }
        .completed {
          color: #00ff00;
        }
        .progress {
          color: #0000ff;
        }
        .status {
          display: flex;
        }
        .status-icon {
          margin: 5px 10px 0px 0px;
          height: 10px;
          width: 10px;
          border-radius: 50%;
        }
        .bgYellow {
          background-color: #ff8c00;
        }
        .bgGreen {
          background-color: #00ff00;
        }
        .bgBlue {
          background-color: #0000ff;
        }
        .header-wrapper {
          display: flex;
        }
        .filter-button {
          margin: -5px 0px 0px 2px;
          height: 30px;
          width: 30px;
        }
      `,
    ];
  }

  /**
   * Constructor Function
   */
  constructor() {
    super();
    this.status = {};
    this.onFilterSelectChange = this.onFilterSelectChange.bind(this);
    this.onCancelFilter = this.onCancelFilter.bind(this);
    this.filterAttribute = [];
    this.index = '';
    this.dataToEdit = '';
  }

  /**
   * Proporties of table component
   * 
   * tableData || @type {Array} Data of of the table row
   * 
   * filteredAttribute || @type {Array} Filter attribute used in the table data
   * 
   * index || @type {String} index of the each row in table
   * 
   * filteredData || @type {Array} Filtered data in the table row
   * 
   * dataToEdit || @type {Object} Data to edit ,  table row data
    */
  static get properties() {
    return {
      tableData: { type: Array },
      filterAttribute: { type: Array },
      index: { type: String },
      filteredData: { type: Array },
      dataToEdit: { type: Object },
    };
  }

  onFilterSelectChange(e) {
    if (requestID.includes(e.target.id)) {
      this.filterAttribute.requestID = e.target.id;
    }
    if (project.includes(e.target.id)) {
      this.filterAttribute.project = e.target.id;
    }
    this.filterAttribute = Object.assign({}, this.filterAttribute);
  }

  /**
   * Opens the filter dialog
   */

  openDialog() {
    this.querySelector('#filter-dialog').open();
  }

  /**
   * Opens the edit dialog
   */

  openEditDialog() {
    this.querySelector('#edit-dialog').open();
  }

  /**
   * 
   * @param {*} e || event
   * @param {*} index || index of the selected table row to edit
   */
  handlEditDialog(e, index) {
    e.target.ownerDocument.body
      .querySelector('#app')
      .shadowRoot.querySelector('#main')
      .querySelector('#table')
      .shadowRoot.querySelector('#edit')
      .shadowRoot.querySelector('#edit-item')
      .open();
    this.index = index;
    this.dataToEdit = this.filteredData[index];
  }

  /**
   * 
   * @param {*} editedData || edited data of the table row of selected index
   * edit the table row
   */
  editTableRow(editedData) {
    this.tableData = this.tableData.map((item, index) => {
      if (index === this.index) {
        return editedData;
      }
      return item;
    });
  }

  /**
   * 
   * @param {*} e|| event
   *  
   */
  onCancelFilter(e) {
    let filter = e.target.id;
    let { [filter]: removedFilter, ...restFilter } = this.filterAttribute;
    this.filterAttribute = restFilter;
  }

  /**
   * 
   * @param {*} root || root 
   * @param {*} column || column 
   * @param {*} data || table row data
   * render the edit button on the table row
   */
  editButtonRenderer(root, column, data) {
    const innerHTML = html`
      <paper-icon-button-light @click=${this.openEditDialog}>
        <button>
          <iron-icon icon="more-vert"></iron-icon>
        </button>
        <paper-dialog id="edit-dialog"
          ><paper-button @click=${(e) => this.handlEditDialog(e, data.index)}>
            <iron-icon class="edit-icon" icon="editor:mode-edit"></iron-icon
            >EDIT
          </paper-button>
        </paper-dialog>
      </paper-icon-button-light>
    `;
    render(innerHTML, root);
  }

  /**
   * 
   * @param {*} status || status of the table row
   * @returns {Object} || returns object containing css  maped with status to style the dot icon
   */
  getStatusClassMapDot(status) {
    return {
      bgYellow: status === 'Queued',
      bgGreen: status === 'Completed',
      bgBlue: status === 'Progress',
    };
  }

   /**
   * 
   * @param {*} status || status of the table row
   * @returns {Object} || returns object containing css  maped with status to style text in status field
   */
  getStatusClassMapText(status) {
    return {
      queued: status === 'Queued',
      completed: status === 'Completed',
      progress: status === 'Progress',
    };
  }

  /**
   * 
   * @param {*} root || root
   * @param {*} column || column
   * @param {*} data || row data
   * 
   * render the status with crossponding styling
   */
  statusRender(root, column, data) {
    this.status = data.item.status;
    const innerHTML = html`
      <div class=" status ${classMap(this.getStatusClassMapText(this.status))}">
        <div
          class="status-icon ${classMap(
            this.getStatusClassMapDot(this.status)
          )}"
        ></div>
        <div>${data.item.status}</div>
      </div>
    `;
    render(innerHTML, root);
  }

  /**
   * 
   * @param {*} root || root
   * @param {*} column || column
   * @param {*} data || data
   * 
   * render the table ID field data in table row
   */
  requestIDRenderer(root, column, data) {
    const innerHTML = html`
      <div><a href="https://www.google.com/">${data.item.requestID}</a></div>
    `;
    render(innerHTML, root);
  }

  /**
   * 
   * @param {*} root || root
   * @param {*} column || column
   * render the request ID header with filter icon and crossponding components
   */

  requestIDHeaderRenderer(root, column) {
    const innerHTML = html`
      <div class="header-wrapper">
        <div>Request ID</div>
        <paper-icon-button-light
          class="filter-button"
          @click=${this.openDialog}
        >
          <button>
            <iron-icon icon="filter-list"></iron-icon>
          </button>
          <paper-dialog id="filter-dialog"
            ><filter-dialog
              dialogHeader="Request ID"
              .listData=${requestID}
              label="Request ID"
              .handleFilterSelect=${this.onFilterSelectChange}
            ></filter-dialog
          ></paper-dialog>
        </paper-icon-button-light>
      </div>
    `;
    render(innerHTML, root);
  }

  /**
   * 
   * @param {*} root || root
   * @param {*} column || column
   * render the project header with filter icon and crossponding components
   */
  projectHeaderRenderer(root, column) {
    const innerHTML = html`
      <div class="header-wrapper">
        <div>Project</div>
        <paper-icon-button-light
          class="filter-button"
          @click=${this.openDialog}
        >
          <button>
            <iron-icon icon="filter-list"></iron-icon>
          </button>
          <paper-dialog id="filter-dialog"
            ><filter-dialog
              dialogHeader="Project"
              .listData=${project}
              label="Project"
              .handleFilterSelect=${this.onFilterSelectChange}
            ></filter-dialog
          ></paper-dialog>
        </paper-icon-button-light>
      </div>
    `;
    render(innerHTML, root);
  }

  /**
   * 
   * @returns html to render 
   */
  render() {
    if (Object.entries(this.filterAttribute).length === 0) {
      this.filteredData = [...this.tableData];
    } else {
      let filterData = [];
      let filterArributeArray = Object.entries(this.filterAttribute);
      filterArributeArray.map((filterItem) => {
        this.tableData.map((tableRow) => {
          if (tableRow[filterItem[0]] === filterItem[1]) {
            if (!filterData.includes(tableRow)) filterData.push(tableRow);
          }
        });

        this.filteredData = [...filterData];
      });
    }
    return html`
      <filter-item
        .cancelFilter=${this.onCancelFilter}
        .filterDetail=${this.filterAttribute}
      ></filter-item>
      <vaadin-grid .items=${this.filteredData} theme="column-borders">
        <vaadin-grid-column
          auto-width
          .renderer=${(root, column, data) =>
            this.editButtonRenderer(root, column, data)}
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          .headerRenderer=${(root, column) =>
            this.requestIDHeaderRenderer(root, column)}
          .renderer=${(root, column, data) =>
            this.requestIDRenderer(root, column, data)}
          path="requestID"
          header="Request ID"
        ></vaadin-grid-column>

        <vaadin-grid-column
          .headerRenderer=${(root, column) =>
            this.projectHeaderRenderer(root, column)}
          auto-width
          path="project"
          header="Project"
        >
        </vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          path="target"
          header="Target"
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          path="requestedBy"
          header="Requested By"
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          path="assignee"
          header="Assignee"
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          path="requestedDate"
          header="Requested Date"
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          path="neededDate"
          header="Needed By Date"
        ></vaadin-grid-column>

        <vaadin-grid-column
          auto-width
          .renderer=${(root, column, data) =>
            this.statusRender(root, column, data)}
          path="status"
          header="Status"
        ></vaadin-grid-column>
      </vaadin-grid>
      <edit-item
        .indexValue=${this.index}
        .data=${this.dataToEdit}
        .updateTableRow=${this.editTableRow}
        id="edit"
      ></edit-item>
    `;
  }
}

/**
 * register table component as table-component
 */
customElements.define('table-component', TableComponent);
