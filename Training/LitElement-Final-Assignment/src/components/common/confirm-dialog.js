import { LitElement, html, css } from 'lit';

export class ConfirmDialog extends LitElement {
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

        paper-dialog {
          top: 16px;
          width: 40%;
        }
        .wrapper {
          padding: 15px;
        }
        h2 {
          padding: 15px 0px 15px 0px;
        }
      `,
    ];
  }

  static get properties() {
    return {
        handleCancel : {type:Function}
    };
  }
  constructor() {
    super();
  }

 
  render() {
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
          paper-button.close {
            background: var(--paper-fab-background, var(--accent-color));
            padding: 10px;
            color: #ffffff;
            font-weight: 400;
          }
        </style>
      </custom-style>
      <paper-dialog id="confirm-message" with-backdrop>
        <div class="wrapper">
          <h2>Are you sure you want to cancel?</h2>
          <paper-button dialog-dismiss  raised class="close"
            >YES</paper-button
          >
          <paper-button  @click=${this.handleCancel} class="cancel">NO</paper-button>
        </div>
      </paper-dialog>
    `;
  }
}

customElements.define('confirm-dialog', ConfirmDialog);
