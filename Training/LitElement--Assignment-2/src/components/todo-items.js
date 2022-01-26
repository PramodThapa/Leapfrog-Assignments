import { LitElement, html, css } from 'lit';

export class TodoItems extends LitElement {

  static get properties() {
    return {
      item: { type: String },
      completed: {type: String},
      deleteItem: { type: Function },
      markComplete: {type: Function},
    };
  }

  static get styles() {
    return [css`
    *{
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-family: Ubuntu;
    }
    .todo-item{
      margin-top:12px;
    }
    .completed{
      text-decoration: line-through;
    }
    button{
      display:inline-block;
      margin-top:5px;
      height: 30px;
      width: 30%;
    }
    `];
  }
  constructor() {
    super();
  }

  render() {
    return html`
    <div class = 'todo-item'>
      ${console.log(this.completed)}
      <p class= '${this.completed ? "completed":""}'>${this.item}</p>
      
      <button @click=${this.deleteItem}>Delete</button>
      <button @click=${this.markComplete}>Mark Complete</button>
    </div>
    `;
  }
}

customElements.define('todo-items', TodoItems);
