import './todo-items.js'

const template = document.createElement("template");

template.innerHTML = `
  <style>
  *{
    box-sizing:border-box;
    margin:0px;
    padding:0px;
    font-family: Ubuntu;
  }
  .todo-container{
    min-width:500px;
    padding: 20px;
    border-radius: 5px;
    box-shadow:  2px 2px 5px;
  }
  input[type=text]{
    padding:3px;
    width:85%;
    height: 35px;
    font-size: 16px;
  }

  button{
    height:35px;
    width:12%;    
  }

  ul{
    margin-top:10px;
  }

  </style>
  <div class='todo-container'>
  <input class= 'text-area' type = 'text' placeholder = 'Add todo item...'>
  <button>Add</button>
  <ul id = 'todos'></ul>
  </div>
`;

class Todo extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.inputField = this._shadowRoot.querySelector("input");
    this.addTodoButton = this._shadowRoot.querySelector("button");
    this.todoList = this._shadowRoot.querySelector("ul");
    this.todos = [];
  }

  render() {
    this.todoList.innerHTML = ``;
    this.todos.forEach((item, index) => {
      let todoItem = document.createElement("todo-item");
      todoItem.setAttribute("text", item.text);
      todoItem.setAttribute("index", index);
      if (item.checked) {
        todoItem.setAttribute("checked", "");
      }
      todoItem.addEventListener("onRemove", this.removeTodo.bind(this));
      todoItem.addEventListener("onCheck", this.checkTodo.bind(this));
      this.todoList.appendChild(todoItem);
    });
  }

  connectedCallback() {
    this.addTodoButton.addEventListener("click", this.addTodo.bind(this));
  }

  addTodo() {
    if (this.inputField.value.length > 0) {
      this.todos.push({
        text: this.inputField.value,
      });
    }
    this.inputField.value = "";
    console.log(this.todos);
    this.render();
  }

  removeTodo(e) {
    this.todos.splice(e.detail, 1);
    this.render();
  }

  checkTodo(e) {
    let todo = this.todos[e.detail];
    console.log(todo)
    this.todos[e.detail] = Object.assign({}, todo, {
      checked: !this.todos[e.detail].checked,
    });
    this.render();
  }
}

customElements.define("todo-app", Todo);
