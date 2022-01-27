import { LitElement, html, css } from 'lit';
import './components/form-component';

export class MyApp extends LitElement {
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
  static get properties() {
    return {
      bindingGroups: { type: Array },
    };
  }

  constructor() {
    super();
    this.bindingGroups = [
      'BRD2 Affinity_High_Affinity',
      'BRD2 AMP_PNP_competitive',
      'BRD@ NRX-0459676_non-competitive',
      'BRD3 Affinity_High_Affinity',
      'BRD3 AMP_PNP_competitive',
      'BRD# NRX-0459676_non-competitive',
    ];
  }
  render() {
    return html` <main>
      <form-component
        .bindingGroups=${this.bindingGroups}>
      </form-component>
    </main>`;
  }
}

customElements.define('my-app', MyApp);
