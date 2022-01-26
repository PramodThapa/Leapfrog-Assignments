import { LitElement, html, css } from 'lit';

export class ProductSearch extends LitElement {
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
      searchText: { type: String },
      stock: { type: Boolean },
      onValueChange: { type: Function },
      onCheckBoxEvent: { type: Function },
    };
  }

  constructor() {
    super();
    this.stock = false;
    this.searchText = '';
  }
  

  render() {
    return html`
            <input
                type = 'text'
                placeholder = 'Search...'
                .value = ${this.searchText}
                @keyup = ${(e)=>{this.onValueChange(e)}} 
            /><br>
            <input
                type = 'checkbox'
                .checked = ${this.stock}
                @click = ${(e)=>{this.onCheckBoxEvent(e)}}

            />
            <label>Only show products in stock </label>
        `;
  }
}

customElements.define('product-search', ProductSearch);
