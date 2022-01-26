import { LitElement, html, css } from 'lit';

export class ProductCategory extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      category: { type: String },
    };
  }

  render() {
    return html`
        <h3>${this.category}</h3>
    `;
  }
}

customElements.define('product-category', ProductCategory);
