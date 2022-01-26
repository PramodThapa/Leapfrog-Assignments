import { LitElement, html, css } from 'lit';

export class TagComponent extends LitElement {
  static get styles() {
    return [
      css`
        *{
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
          font-family: Ubuntu;
        }
        .tag {
          margin: 15px 0px 15px 75px;
          display: inline-block;
          background-color: lightgrey;
          border: solid 2px grey;
          border-radius: 20px;
          padding: 0.5%;
          min-width: 50px;
          margin-right: 20px;
        }
        .hashtag {
          color: blue;
        }
      `,
    ];
  }
  static get properties() {
    return {
      tags: { type: Array },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      ${this.tags.map(
        (tag,key) => html`
          <div class="tag">
            <span class="hashtag">#</span>
            <span class="text">${tag}</span>
          </div>
        `
      )}
    `;
  }
}

customElements.define('tag-component', TagComponent);
