import { LitElement, html, css } from 'lit';
import './header-component';
export class PostComponent extends LitElement {
  static get styles() {
    return [css`
        .post-wrapper{
            width:600px;
            margin:30px auto 0px auto;
        }
    `];
  }
  static get properties() {
    return {
      post: { type: Object },
    };
  }
  constructor() {
    super();
  }

  render() {
    console.log(this.post);
    return html`
      <div class="post-wrapper">
        <header-component></header-component>
        <h3>${this.post.userName}</h3>
      </div>
    `;
  }
}

customElements.define('post-component', PostComponent);
