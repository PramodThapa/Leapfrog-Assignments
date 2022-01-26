import { LitElement, html, css } from 'lit';
import './product-category';
import './product-item';

export class ProductTable extends LitElement {
  static get styles() {
    return css`
      span {
        margin-right: 160px;
      }

      .header {
        display: flex;
      }

      .header-label {
        width: 200px;
      }
    `;
  }

  static get properties() {
    return {
      productData: { type: Array },
      searchText: { type: String },
      stock: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.productRow = [];
    this.searchText = '';
    this.productData = '';
  }
  
  updated() {
    this.productRow = [];
  }

  render() {
    let previousCategory = null;
    this.productData.map((item) => {
      if (item.name.indexOf(this.searchText) === -1) {
        return;
      }
      if (this.stock && !item.stocked) {
        return;
      }
      if (item.category != previousCategory) {
        previousCategory = item.category;
        this.productRow.push(
          html`<product-category  .category=${item.category} </product-category>`
        );
      }
      this.productRow.push(
        html`<product-item .product=${item}> </product-item>`
      );
    });
    return html`
      <div class="table-wrapper">
        <br />
        <div class="header">
          <div class="header-label">Name</div>
          <div class="header-label">Price</div>
        </div>
        <div>${this.productRow}</div>
      </div>
    `;
  }
}

customElements.define('product-table', ProductTable);
