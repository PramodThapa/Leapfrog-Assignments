import { LitElement, html, css } from 'lit';

export class PostContent extends LitElement {
  static get styles() {
    return [css``];
  }
  static get properties() {
    return {
      postTitle: { type: String },
      postContent: { type: String },
    };
  }
  constructor() {
    super();
  }

  render() {
    return html`
    
    `;
  }
}

customElements.define('post-content', PostContent);
