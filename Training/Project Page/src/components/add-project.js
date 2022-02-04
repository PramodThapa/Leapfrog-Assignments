import { LitElement, html, css, nothing } from 'lit-element';

import './commons/error-message.js';

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button-light.js';
/**
 * Your description here..
 */
class AddProject extends LitElement {
  /**
   * The styles for the component.
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
          font-family: Ubuntu;
        }
      `,
    ];
  }

  /**
   * Static getter properties.
   *
   * @returns {Object}
   */
  static get properties() {
    return {
      openDialog: { type: Boolean },
      formData: { type: Object },
      handleCloseDialog: { type: Function },
    };
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();
    this.formData = {};
    this.validated = false;
  }

  handleInputChange(e) {
    this.formData[e.target.name] = e.target.value;
    console.log(this.formData);
  }

  addProject() {
   
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html`
      <paper-dialog modal .opened=${this.openDialog}>
        <div class="wrapper">
          <h2>Add Project</h2>
          <paper-icon-button-light @click="${this.handleInputChange}">
            <button>
              <iron-icon icon="close"></iron-icon>
            </button>
          </paper-icon-button-light>

          <paper-input
            class="custom"
            id="first-name"
            label="First Name *"
            always-float-label
            name="firstName"
            required
            .value=${this.firstName}
            @input=${this.handleInputChange}
          >
          </paper-input>
          ${this.firstName === ''
            ? html`<error-message error="error"></error-message>`
            : nothing}

          <paper-input
            class="custom"
            name="lastName"
            id="last-name"
            label="Last Name*"
            always-float-label
            required
            .value=${this.lastName}
            @input=${this.handleInputChange}
          >
          </paper-input>

          ${this.lastName === ''
            ? html`<error-message error="error"></error-message>`
            : nothing}

          <button @click=${this.addProject}>ADD</button>
        </div>
      </paper-dialog>
    `;
  }
}

customElements.define('add-project', AddProject);
