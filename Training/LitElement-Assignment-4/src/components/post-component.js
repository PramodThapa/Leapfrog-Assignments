import { LitElement, html, css } from 'lit';
import './header-component';
import './post-content';
import './tag-component';
export class PostComponent extends LitElement {
  static get styles() {
    return [
      css`
        .post-wrapper {
          width: 800px;
          margin: 30px auto 0px auto;
          box-shadow: 2px 2px 4px;
        }
      `,
    ];
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
    return html`
      <div class="post-wrapper">
        <header-component
          .status=${this.post.status}
          .userName=${this.post.userName}
          .postedTime=${this.post.postedTime}
          .answer=${this.post.answers}
          .profileUrl=${this.post.profileUrl}
          .viewerProfileUrl=${this.post.viewerProfileUrl}
        ></header-component>
        <post-content
          .postTitle=${this.post.title}
          .postContent=${this.post.content}
        >
        </post-content>
        <tag-component .tags=${this.post.tags}> </tag-component>
      </div>
    `;
  }
}

customElements.define('post-component', PostComponent);
