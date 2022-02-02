import { LitElement, html, css } from 'lit';

export class FilterItem extends LitElement {
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
        .wrapper {
          display: flex;
        }
        .filter-container {
          display: flex;
          background-color: grey;
          color: #ffffff;
          padding: 3px 10px 3px 10px;
          margin: 5px 10px 5px 10px;
          border-radius: 15px;
          font-family: Ubuntu;
        }

        paper-icon-button-light {
          height: 20px;
          width: 20px;
          margin-left: 10px;
        }

        iron-icon {
          height: 20px;
          width: 20px;
        }
        h3 {
          font-family: Ubuntu;
          padding: 3px 10px 3px 10px;
          margin: 5px 0px 5px 10px;
        }
      `,
    ];
  }
  /**
   * get proporties
   *
   * @type {Function}
   *
   * @returns {Object}
   *
   * filterDetail ||  @type {Object} filter detail accoring to with filter need to be applied in table
   *
   * cancelFilter || @type {Function} @returns {} cancel the selected filter
   */
  static get properties() {
    return {
      filterDetail: { type: Object },
      cancelFilter: { type: Function },
    };
  }

  /**
   * constructor function
   */
  constructor() {
    super();
  }

  /**
   *
   * @returns html to render
   */
  render() {
    return html`
      <div class="wrapper">
        <h3>Filter :</h3>
        ${Object.entries(this.filterDetail).map(
          (item) =>
            html`<div class="filter-container">
              <div>${item[1]}</div>
              <paper-icon-button-light @click=${(e) => this.cancelFilter(e)}>
                <button>
                  <iron-icon id=${item[0]} icon="close"></iron-icon>
                </button>
              </paper-icon-button-light>
            </div>`
        )}
      </div>
    `;
  }
}

/**
 * Register component as filter-item
 */
customElements.define('filter-item', FilterItem);
