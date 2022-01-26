import { LitElement, html, css } from 'lit';

import './components/todo-items';

export class Todo extends LitElement {
  static get properties() {

    return {
      list: { type: Array },
      todo: { type: String },
    };
  }

  constructor() {
    super();
    this.list = [
      this.todoItem('Make documentation'),
      this.todoItem('Todo Assignment'),
    ];
    this.todo = '';
  }

  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box;
          margin: 0px;
          padding: 0px;
          font-family: Ubuntu;
        }
        .todo-container {
          min-width: 400px;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 2px 2px 5px;
        }
        input[type='text'] {
          padding: 3px;
          width: 85%;
          height: 35px;
          font-size: 16px;
        }
        button {
          height: 35px;
          width: 12%;
        }
      `,
    ];
  }

  todoItem(todo) {
    return { todo, completed: false };
  }

  addTodo() {
    this.list = [...this.list, this.todoItem(this.todo)];
    this.todo = '';
  }

  handleInput(e) {
    this.todo = e.target.value;
  }

  handleKeyPress(e) {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.addTodo();
      }
    }
  }

  deleteItem(indexToDelete) {
    this.list = this.list.filter((toDo, index) => index !== indexToDelete);

    console.log(indexToDelete);
    // this.list = this.list.splice(indexToDelete, 1);
  }

  markComplete(indexToMark) {
    this.list[indexToMark].completed = !this.list[indexToMark].completed;
    console.log(indexToMark)
    console.log(this.list)
    console.log(this.list[indexToMark].completed)

  }

  render() {
    return html`
      <div class="todo-container">
        <input
          type="text"
          .value=${this.todo}
          @input=${this.handleInput}
          @keypress=${this.handleKeyPress}
        />
        <button @click=${this.addTodo}>Add</button>

        <div>
          ${this.list.map((item, key) => {
            return html`
              <todo-items
                item=${item.todo}
                completed=${item.completed}
                .deleteItem=${this.deleteItem.bind(this, key)}
                .markComplete=${this.markComplete.bind(this, key)}
              >
              </todo-items>
            `;
          })}
        </div>
      </div>
    `;
  }
}

customElements.define('todo-app', Todo);



