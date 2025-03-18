const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const cancelEditButton = document.querySelector("#cancel-edit-btn");
const completTodo = document.querySelector(".task-complete-btn");

const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const containerTitleTodo = document.createElement("div");
  containerTitleTodo.classList.add("title-todo");

  const titleTodo = document.createElement("h3");
  titleTodo.innerText = text;
  todo.appendChild(containerTitleTodo);
  containerTitleTodo.appendChild(titleTodo);

  const buttonsTodo = document.createElement("div");
  buttonsTodo.classList.add("buttons-todo");
  todo.appendChild(buttonsTodo);

  const buttonComplete = document.createElement("button");
  buttonComplete.classList.add("task-complete-btn");

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("task-edit-btn");

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("task-delete-btn");

  buttonsTodo.appendChild(buttonComplete);
  buttonsTodo.appendChild(buttonEdit);
  buttonsTodo.appendChild(buttonDelete);

  const spanComplete = document.createElement("span");
  const spanEdit = document.createElement("span");
  const spanDelete = document.createElement("span");

  spanComplete.classList.add("material-symbols-outlined");
  spanComplete.innerText = "check";

  spanEdit.classList.add("material-symbols-outlined");
  spanEdit.innerText = "edit";

  spanDelete.classList.add("material-symbols-outlined");
  spanDelete.innerText = "delete";

  buttonComplete.appendChild(spanComplete);
  buttonEdit.appendChild(spanEdit);
  buttonDelete.appendChild(spanDelete);

  // Adiciona o todo à lista
  todoList.appendChild(todo);
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    console.log(saveTodo(inputValue));
  }
});

completTodo.addEventListener("click", () => {
  const todo = document.querySelector(".todo");
  todo.classList.toggle("done");
});
