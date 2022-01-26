import { LitElement, html, css } from 'lit';

export class PostContent extends LitElement {
  static get styles() {
    return [css`
      *{
        box-sizing: border-box;
        font-family : Ubuntu;
        padding:0;
        margin :0;
      }

      .title{
        margin-top:10px;
        margin-left:75px;
      }

      .content{
        margin-top:5px;
        margin-left:75px;
        font-size: 13px;
      }
    
    `];
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
      <div class = 'title'>
        <b>${this.postTitle}</b>
      </div>
      <div class = 'content'>
        ${this.postContent}
      </div>
    `;
  }
}

customElements.define('post-content', PostContent);
