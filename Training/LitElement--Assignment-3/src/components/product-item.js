import { LitElement, html, css } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';

export class ProductItem extends LitElement {
  static get styles() {
    return css`
      .product-wrapper {
        display: flex;
      }
      .stocked {
        color: red;
      }
      .data{
          width: 200px;
      }
    `;
  }

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="product-wrapper">
        <div class=" data ${classMap({ stocked: !this.product.stocked })}">
          ${this.product.name}
        </div>
        <div class ='data'>${this.product.price}</div>
      </div>
    `;
  }
}

customElements.define('product-item', ProductItem);
