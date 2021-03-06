import { LitElement, html, css } from 'lit-element';

/**
 * Your description here..
 */
class ErrorMessage extends LitElement {
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
        error:{type:String}
    };
  }

  /**
   * Constructor for the component.
   * Binding and props initialization.
   */
  constructor() {
    super();
  }

  /**
   * Renders the component.
   *
   * @returns {HTMLElement}
   */
  render() {
    return html`
    <div class='error-message'>${this.error}</div>
    `;
  }
}

customElements.define('error-message', ErrorMessage);
