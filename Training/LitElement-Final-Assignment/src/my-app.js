import { LitElement, html, css } from 'lit';
import './components/table-component';
import './components/add-item';
import './components/edit-item';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyApp extends LitElement {
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
        main {
          width: 85%;
          margin: 20px auto 0px auto;
          box-shadow: 2px 2px 5px;
        }
        add-item {
          padding: 2px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      onAddButtonClick: { type: Function },
      tableData: { type: Array },
    };
  }
  constructor() {
    super();
    this.tableData = [
      {
        requestID: 'Aspen-clone-sprint-1',
        requestName: 'Aspen-clone-sprint-1',
        project: 'HUWE1',
        target: 'HUWE1-PART-I',
        requestedBy: 'Ankit Karki',
        assignee: 'Prabin Thapa',
        requestedDate: '2022-01-09',
        neededDate: '2022-02-21',
        status: 'Completed',
      },
      {
        requestID: 'Aspen-clone-sprint-1',
        requestName: 'Aspen-clone-sprint-1',
        project: 'HUWE1',
        target: 'HUWE1-PART-I',
        requestedBy: 'Ashish GC',
        assignee: 'Rohan Pokhrel',
        requestedDate: '2022-01-09',
        neededDate: '2022-02-24',
        status: 'Completed',
      },
    ];
    this.onAddButtonClick = this.onAddButtonClick.bind(this);
  }

  onAddButtonClick(request) {
    this.tableData.push(request);
    this.tableData = [...this.tableData]
  }

  render() {
    return html`<main id= 'main'>
      <table-component id = 'table' .tableData=${this.tableData}></table-component>
      <add-item .addItem=${this.onAddButtonClick}></add-item>
    </main>`;
  }
}

customElements.define('my-app', MyApp);
