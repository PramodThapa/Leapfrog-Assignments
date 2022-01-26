import { LitElement, html, css } from 'lit';

import './components/product-search';
import './components/product-table';
import { PRODUCTS } from './constants/data';

export class MyApp extends LitElement {
  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
          font-family: Ubuntu;
        }
        input[type='text'] {
          min-width: 250px;
          height: 40px;
          font-size: 16px;
          padding: 2px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      handleKeyPress: { type: String },
      handleCheckBox: { type: String },
      searchText: { type: String },
      stock: { type: Boolean },
      product: { type: Array },
    };
  }
  handleKeyPress(e) {
    // let filteredData = [];
    this.searchText = e.target.value;
    // //console.log(this.searchText)
    // if (this.searchText != ' ') {
    //   this.product.map((item) => {
    //     if (item.name.startsWith(this.searchText)) {
    //       filteredData.push(item);
    //     }
    //   });
    //   console.log(filteredData);
    //   this.product = filteredData;
    // }
  }

  handleCheckBox(e) {
    this.stock = e.target.checked;
  }

  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.stock = false;
    this.searchText = '';
    //this.product = PRODUCTS;
  }

  render() {
    return html`
      <product-search
        .searchText=${this.searchText}
        .stock=${this.stock}
        .onValueChange=${this.handleKeyPress}
        .onCheckBoxEvent=${this.handleCheckBox}
      ></product-search>
      <product-table
        .productData=${PRODUCTS}
        .searchText=${this.searchText}
        .stock=${this.stock}
      ></product-table>
    `;
  }
}

customElements.define('my-app', MyApp);
