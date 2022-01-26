import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {
  static get styles() {
    return [
      css`
        .header-wrapper {
          display: flex;
        }
        .header-left{
            width:10%
        }
        .header-content{
            width: 70%
        }
        .header-right{
            width:20%
        }

      `,
    ];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="header-left">Left</div>
        <div class="header-content">Midde</div>
        <div class="header-right">Right</div>
      </div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
