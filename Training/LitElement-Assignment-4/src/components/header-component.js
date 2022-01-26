import { LitElement, html, css } from 'lit';

export class HeaderComponent extends LitElement {
  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: Ubuntu;
        }
        .container{
          width:100%;
        }
        .flex {
          display: flex;
        }
        .flex-d {
          flex-direction: column;
        }
        .font-md {
          font-size: 12px;
        }
        .sidebar {
          width: 10%;
          background-color: rgb(0, 153, 51);
          border-radius: 5px;
          padding: 5px;
          margin-right: 5px;
          color: #ffffff;
        }
        .header-container{
          width:90%;
        }
        .header-content {
          width: 70%;
        }
        .header-right {
          width: 40%;
        }
        img {
          width: 40px;
          border-radius: 50%;
          height: 40px;
        }
        .acs {
          color: blue;
          margin-left: 5px;
        }
        .status {
          background-color: #ffa500;
          padding: 4px 5px;
          border-radius: 10px;
        }
        .answer {
          text-align: center;
        }
        .posted-time {
          color: grey;
          font-size: 12px;
          padding: 2px;
        }
        .name {
          margin-left: 10px;
        }
        .viewer{
          position: relative;
        }
        .post-viewer{
          position:absolute;
          width:30px;
          height:30px;
        }
          
        }
      `,
    ];
  }
  static get properties() {
    return {
      status: { type: String },
      userName: { type: String },
      postedTime: { type: String },
      answer: { type: Number },
      profileUrl: { type: String },
      viewerProfileUrl: { type: Array },
    };
  }
  constructor() {
    super();
    this.answer = '';
  }

  render() {
    return html`
      <div class="container flex">
        <div class="sidebar font-md">
          <div class="answer">${this.answer}</div>
          Answers
        </div>

        <div class="header-container flex">
          <img src="${this.profileUrl}" />
          <div class="header-content">
            <div class="name">
              <b>${this.userName}</b> <br />
              <span class="posted-time"
                >${this.postedTime} | <span class="acs">ACS - 1 </span>
                <span class="status">${this.status}</span>
              </span>
            </div>
          </div>

          <div class="header-right">
            <div class="viewer">
              ${this.viewerProfileUrl.map(
                (item, key) =>
                  html`
                    <img
                      class="post-viewer"
                      style="right:${key * 25}px; margin-right: 60px"
                      src="${item}"
                    />
                  `
              )}
              <img
                class="post-viewer"
                src="../images/dots_icon_horizontal.jpeg"
                style="left: ${8* 22}px"
              />
              <img
                class="post-viewer"
                src="../images/dots_icons_vertical.png"
                style="left: ${8 * 27}px"
              />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
