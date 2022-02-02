import { LitElement, html, css, nothing } from 'lit';
import { formatISO } from 'date-fns';
import {
  project,
  projectTarget,
  requestID,
  requestedBY,
  assignee,
  status,
} from '../services/table-data.js';
import './common/confirm-dialog';
import '@polymer/paper-input/paper-input-container.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-icon-button/paper-icon-button-light.js';
import '@vaadin/date-picker';
import '@polymer/paper-button/paper-button.js';

export class AddItem extends LitElement {
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
          margin: 0px;
          padding: 0px;
          font-family: Ubuntu;
        }
        paper-fab {
          padding: 0;
          height: 45px;
          width: 45px;
        }
        paper-dialog {
          top: 16px;
          width: 40%;
        }
        .wrapper {
          padding: 15px;
        }
        .header {
          display: float;
        }
        h2 {
          float: left;
        }
        paper-icon-button-light {
          float: right;
        }
        .clearfix::after {
          content: '';
          clear: both;
          display: table;
        }
        .form-content {
          margin-top: 15px;
        }
        paper-dropdown-menu {
          width: 100%;
          font-family: Ubuntu;
        }
        .dropdown-content {
          padding: 5px;
        }
        .form-footer {
          margin-top: 15px;
          display: flex;
        }
        vaadin-date-picker {
          width: 100%;
        }
      `,
    ];
  }

  static get properties() {
    return {
      target: { type: Array },
      addItem: { type: Function },
    };
  }
  constructor() {
    super();
    this.project = project;
    this.projectTarget = projectTarget;
    this.target = [];
    this.openDialog = this.openDialog.bind(this);
  }

  openDialog() {
    this.shadowRoot.querySelector('#add-item').open();
    this.shadowRoot
      .querySelector('#confirm-dialog')
      .shadowRoot.querySelector('#confirm-message')
      .close();
  }

  closeDialog() {
    this.shadowRoot.querySelector('#add-item').close();
    this.close = true;
  }

  handleValueChange() {
    this.shadowRoot.querySelector('#target').value = null;
    let project = this.shadowRoot.querySelector('#project').value;
    this.target = this.projectTarget[project];
  }

  handleAddButtonClick() {
    let validated = true;
    let synthesisRequest = {};

    if (this.shadowRoot.querySelector('#request-name').validate()) {
      synthesisRequest.requestName =
        this.shadowRoot.querySelector('#request-name').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#reaction-workflow').validate()) {
      synthesisRequest.requestID =
        this.shadowRoot.querySelector('#reaction-workflow').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#project').validate()) {
      synthesisRequest.project =
        this.shadowRoot.querySelector('#project').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#target').validate()) {
      synthesisRequest.target = this.shadowRoot.querySelector('#target').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#requested-by').validate()) {
      synthesisRequest.requestedBy =
        this.shadowRoot.querySelector('#requested-by').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#assignee').validate()) {
      synthesisRequest.assignee =
        this.shadowRoot.querySelector('#assignee').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#needed-by-date').validate()) {
      synthesisRequest.neededDate =
        this.shadowRoot.querySelector('#needed-by-date').value;
    } else {
      validated = false;
    }

    if (this.shadowRoot.querySelector('#requested-date').validate()) {
      synthesisRequest.requestedDate =
        this.shadowRoot.querySelector('#requested-date').value;
    } else {
      validated = false;
    }

    synthesisRequest.status = status[Math.floor(Math.random() * status.length)];

    if (validated === true) {
      this.addItem(synthesisRequest);
    }
  }

  handleConfirmDialog(e) {
    this.shadowRoot
      .querySelector('#confirm-dialog')
      .shadowRoot.querySelector('#confirm-message')
      .open();
  }

  render() {
    console.log();
    return html`
      <custom-style>
        <style is="custom-style">
          input.my-input {
            @apply --paper-input-container-shared-input-style;
          }
          paper-button.cancel {
            margin-left: 10px;
            padding: 10px;
            color: grey;
            font-weight: 400;
          }
          paper-button.add {
            background: var(--paper-fab-background, var(--accent-color));
            padding: 10px;
            color: #ffffff;
            font-weight: 400;
          }
        </style>
      </custom-style>

      <paper-fab noink @click="${this.openDialog}" icon="add"> </paper-fab>
      <paper-dialog id="add-item" with-backdrop>
        <div class="wrapper">
          <div class="header clearfix">
            <h2>Add Synthesis Request</h2>
            <paper-icon-button-light @click="${this.closeDialog}">
              <button>
                <iron-icon icon="close"></iron-icon>
              </button>
            </paper-icon-button-light>
          </div>

          <div class="form-content">
            <paper-dropdown-menu
              id="reaction-workflow"
              label="Reaction Workflow *"
              required
              error-message="Please enter reaction workflow"
              noink
              no-animations
              horizontal-align="right"
              vertical-offset="60"
            >
              <paper-listbox slot="dropdown-content" class="dropdown-content">
                ${requestID.map(
                  (item) => html` <paper-item>${item}</paper-item> `
                )}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-input
              id="request-name"
              label="Request Name *"
              required
              error-message="Please enter request name"
            >
            </paper-input>

            <paper-dropdown-menu
              @value-changed=${this.handleValueChange}
              id="project"
              label="Project *"
              noink
              required
              no-animations
              horizontal-align="right"
              vertical-offset="60"
            >
              <paper-listbox slot="dropdown-content" class="dropdown-content">
                ${this.project.map(
                  (item) => html` <paper-item>${item}</paper-item> `
                )}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu
              id="target"
              label="Target *"
              noink
              required
              no-animations
              horizontal-align="right"
              vertical-offset="60"
            >
              ${this.target.length != 0
                ? this.target.map(
                    (item) =>
                      html`<paper-listbox
                        slot="dropdown-content"
                        class="dropdown-content"
                      >
                        <paper-item>${item}</paper-item></paper-listbox
                      >`
                  )
                : nothing}
            </paper-dropdown-menu>

            <paper-dropdown-menu
              id="requested-by"
              label="Requested By *"
              noink
              required
              no-animations
              horizontal-align="right"
              vertical-offset="60"
            >
              <paper-listbox slot="dropdown-content" class="dropdown-content">
                ${requestedBY.map(
                  (item) => html`<paper-item>${item}</paper-item>`
                )}
              </paper-listbox>
            </paper-dropdown-menu>

            <paper-dropdown-menu
              id="assignee"
              label="Assignee *"
              noink
              required
              no-animations
              horizontal-align="right"
              vertical-offset="60"
            >
              <paper-listbox slot="dropdown-content" class="dropdown-content">
                ${assignee.map(
                  (item) => html`<paper-item>${item}</paper-item>`
                )}
              </paper-listbox>
            </paper-dropdown-menu>

            <vaadin-date-picker
              .min="${formatISO(Date.now(), { representation: 'date' })}"
              id="needed-by-date"
              required
              error-message="Please enter needed by date"
              label="Needed By Date"
            >
            </vaadin-date-picker>

            <vaadin-date-picker
              id="requested-date"
              required
              error-message="Please enter requested date"
              label="Requested Date"
            >
            </vaadin-date-picker>
          </div>
          <div class="form-footer">
            <paper-button @click=${this.handleAddButtonClick} raised class="add"
              >ADD</paper-button
            >
            <paper-button
              dialog-dismiss
              class="cancel"
              @click=${this.handleConfirmDialog}
              >CANCEL
            </paper-button>
          </div>
        </div>
      </paper-dialog>
      <confirm-dialog
        .handleCancel=${this.openDialog}
        id="confirm-dialog"
      ></confirm-dialog>
    `;
  }
}

customElements.define('add-item', AddItem);
