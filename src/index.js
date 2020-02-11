console.log("Hello from src/index.js!");

// Initial State/Data - A list of todos:
const todos = [
  { title: 'OOP in Ruby', completed: true },
  { title: 'Crush this challenge!', completed: false },
];

// Select the Todos-List
// Hint: It's the <ul> element
const todosList = document.getElementById('todos-list');

// Functions
const appendTodo = (element, position = 'afterbegin') => {
  // TODO: Add a todo to the top of the todos list on the page
  todosList.insertAdjacentElement(position, element);
}

const toggleTodo = (event) => {
  // TODO: Mark a todo as completed and update DOM
  const listItem = event.target;
  const index = listItem.dataset.index;
  const todo = todos[index];
  todo.completed = !todo.completed;
  listItem.classList.toggle('completed');
};

const removeTodo = (event) => {
  // TODO: Remove a todo from the page and from the todos array
  event.stopPropagation();
  const deleteBtn = event.target;
  const index = deleteBtn.dataset.index;
  todos.splice(index);
  deleteBtn.closest('li').remove();
};

const renderTodo = (todo, index) => {
  // TODO: Return an html string with the todo markup
  const html = `
    <li class="list-item ${todo.completed ? 'completed' : ''}"
        data-index="${index}"
    >
      <span class="label">${todo.title}</span>
      <span class="actions">
        <button type="button"
                aria-label="Delete"
                title="Delete"
                class="btn-picto">
                <i class="fas fa-trash" data-index=${index}></i>
        </button>
      </span>
    </li>
  `
  const element = document.createElement('div');
  element.innerHTML = html;
  // Marking/Unmarking todos: listItem click event
  element.addEventListener('click', toggleTodo);
  // Remove todo from page: trash icon click event
  element.querySelector('i').addEventListener('click', removeTodo);

  appendTodo(element);
};

const renderTodos = () => {
  // TODO: Render each todo on the page
  todos.forEach((todo, index) => renderTodo(todo, index));
};


// Start Program
renderTodos();

// Setup Event Listeners
// const listItems = todosList.querySelectorAll('li');
// listItems.forEach((listItem,) => {
//   // Marking/Unmarking todos: listItem click event
//   listItem.addEventListener('click', toggleTodo);
//   // Remove todo from page: trash icon click event
//   listItem.querySelector('i').addEventListener('click', removeTodo);
// });

// Adding a new todo: Form submit event
const form = document.querySelector('form');
const input = form.querySelector('input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = input.value;
  if (title === '') {
    alert('Please input a todo!');
    return null;
  }

  const newTodo = { title: title, completed: false };
  renderTodo(newTodo, todos.length);
  todos.push(newTodo);
  input.value = '';
});


