import { LitElement, html, css, _$LE } from 'lit';
import './components/post-component';

export class MyApp extends LitElement {
  static get styles() {
    return [css``];
  }

  constructor() {
    super();
    this.postData = [
      {
        userName: 'Mikolaj Gonzalez',
        postedTime: 'November 9, 2020 at 6:35pm',
        answers: 8,
        status: 'In progress',
        profileUrl: '../images/profile.jpeg',
        viewerProfileUrl: [
          '../images/profile_1.jpeg',
          '../images/profile_2.jpeg',
          '../images/profile_3.jpeg',
          '../images/profile_4.jpeg',
        ],

        title: 'How do we add new containers to project?',
        content: `Lorem ipsum dolor sit amet, vel error alienum sententiae in, laudem insolens definitiones ad nec. 
              Doctus malorum labores vel ne. Cu est euismod eruditi, altera aeterno consulatu quo no. Nulla facilisi maluisset mei at. 
              Cu bonorum vivendum has, dico accusamus ut duo.`,
        tags: ['ACS', 'Assays'],
      },
    ];
  }

  render() {
    return html`
      ${this.postData.map((post)=> html`
        ${console.log(post)}
        <post-component
        .post = ${post}
        >
        </post-component>`
      )}
    `;
  }
}

customElements.define('my-app', MyApp);
