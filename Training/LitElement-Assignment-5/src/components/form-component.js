import { LitElement, html, css } from 'lit';
import '@vaadin/date-picker';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-button/paper-button.js';

export class FormComponent extends LitElement {
  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
        }
        .form {
          background-color: white;
          border-radius: 2px;
          width: 40%;
          margin: 20px auto 0px auto;
          padding: 15px 15px;
        }
        .form-header {
          display: flex;
          font-family: Ubuntu;
          position: relative;
        }
        .form-row {
          display: flex;
          padding: 10px;
          justify-content: space-between;
        }

        paper-input {
          width: 48%;
        }

        vaadin-date-picker {
          width: 100%;
        }
        paper-textarea {
          width: 100%;
        }
        .raised-button {
          padding: 10px;
          font-family: Ubuntu;
          background: rgb(233, 30, 98);
          color: ivory;
          font-weight: bold;
        }
        .not-raised {
          padding: 10px;
          font-family: Ubuntu;
        }
        h5 {
          color: grey;
          font-weight: 400;
          font-family: Ubuntu;
          margin-top: 10px;
        }
        .binding-group {
          margin-top: 5px;
          border: 1px solid grey;
          padding: 10px;
          height: 100px;
          overflow-y: auto;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar {
          width: 15px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgb(186, 186, 192);
          border-radius: 20px;
          border: 5px solid #fff;
        }
        .checkbox {
          width: 100%;
          padding: 10px 5px;
        }
        .icon {
          width: 25px;
          height: 25px;
          position: absolute;
          right: 0px;
        }
      `,
    ];
  }
  static get properties() {
    return {
      bindingGroups: { type: Array },
    };
  }
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="form">
        <div class="form-header">
          <h3>Create Binding Form</h3>
          <img class="icon" src="../images/cross.png" />
        </div>
        <div class="form-body">
          <div class="form-row">
            <paper-input
              label="Name"
              always-float-label
              value="Binding Group 1"
            ></paper-input>
            <paper-input
              label="Lingads Promoted"
              always-float-label
              disabled
              value="24"
            ></paper-input>
          </div>
          <div class="form-row">
            <paper-input
              label="Description"
              always-float-label
              value="Promising Lingands"
            ></paper-input>
            <paper-input
              label="Total Lingads in Binding Group"
              always-float-label
              disabled
              value="100"
            ></paper-input>
          </div>
          <div class="form-row">
            <vaadin-date-picker label="Date"></vaadin-date-picker>
          </div>
          <div>
            <h5>Binding Group</h5>
            <div class="binding-group">
              ${this.bindingGroups.map(
                (label) => html`
                  <paper-checkbox noink class="checkbox">
                    ${label}
                  </paper-checkbox>
                  <br />
                `
              )}
            </div>
          </div>
          <div class="form-row">
            <paper-textarea label="Comments" always-float-label rows="2">
            </paper-textarea>
          </div>
        </div>
        <div class="form-footer">
          <paper-button toggles raised class="raised-button">
            CREATE
          </paper-button>
          <paper-button class="not-raised"> CANCEL </paper-button>
        </div>
      </div>
    `;
  }
}

customElements.define('form-component', FormComponent);
