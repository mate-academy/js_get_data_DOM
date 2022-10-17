'use strict';

let currentTodos = [
  { id: 1, title: 'HTML', completed: true },
  { id: 2, title: 'CSS', completed: false  },
  { id: 3, title: 'JS', completed: false },
];
const root = document.querySelector('.todoapp');
// root el for searching of other elements that reside inside

const newTodoField = document.querySelector('.new-todo');
// text field for new to-do-s
const itemsList = root.querySelector('.todo-list');
const clearCompletedButton = root.querySelector('.clear-completed');
const allTogglers = root.querySelector('.toggle-all');
const filter = root.querySelector('.filters');

render();

function render() {
  const activeTodos = currentTodos.filter(todo => !todo.completed);
  const completedTodos = currentTodos.filter(todo => todo.completed);

  root.innerHTML = `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"placeholder="What needs to be done?">
    </header>

  ${currentTodos.length > 0 && `
    <section class="main">
      <span class="toggle-all-container">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          ${activeTodos.length === 0 ? 'checked' : ''}
        >
        <label for="toggle-all">Mark all as complete</label>
      </span>

      <ul class="todo-list">
        ${currentTodos.map(todo => `
        <li
        class="todo-item ${todo.completed ? 'completed' : ''}"
        data-todo-id="${todo.id}"
      >
        <input
          id="todo-${todo.id}"
          class="toggle"
          type="checkbox"
          ${todo.completed ? 'checked' : ''}
      >
        <label for="todo-${todo.id}">${todo.title}</label>
        <button class="destroy"></button>
      </li>
    `).join('')}
      </ul>
    </section>

    <footer class="footer">
      <span class="todo-count">
        ${activeTodos.length} items left
      </span>

      <ul class="filters">
        <li>
          <a href="#/" class="selected" data-filter="all">All</a>
        </li>
        <li>
          <a href="#/active" data-filter="active">Active</a>
        </li>
        <li>
          <a href="#/completed" data-filter="completed">Completed</a>
        </li>
      </ul>

      ${completedTodos.length > 0 && (
    `<button class="clear-completed">
          Clear completed
    </button>`
  )}
    </footer>
    `}
  `; // тут вроде все гуд
}

function initTodos() {
  itemsList.innerHTML = `
    ${currentTodos.map(todo => `
      <li
      class="todo-item ${todo.completed ? 'completed' : ''}"
      data-todo-id=${todo.id}
    >
      <input
        id="todo-${todo.id}"
        class="toggle"
        type="checkbox"
        ${todo.completed ? 'checked' : ''}
      >
      <label for="todo-${todo.id}">${todo.title}</label>
      <button class="destroy"></button>
    </li>
    `).join('')}
    `;

  updateInfo();
}

function updateInfo() {
  const completedTogglers = root.querySelectorAll('.toggle:checked');
  const activeTogglers = root.querySelectorAll('.toggle:not(:checked)');
  const counter = root.querySelector('.todo-count');
  const footer = root.querySelector('.footer');
  const toggleAllContainer = root.querySelector('.toggle-all-container');

  counter.innerHTML = `${activeTogglers.length} items left`;

  allTogglers.checked = activeTogglers.length === 0;
  clearCompletedButton.hidden = completedTogglers.length === 0;

  const hasTodos = completedTogglers.length > 0 || activeTogglers.length > 0;

  footer.hidden = !hasTodos;
  toggleAllContainer.hidden = !hasTodos;

  console.log(currentTodos);
};

// add todo
newTodoField.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter') {
    return;
  } // if any other key is pressed, nothing happens

  if (!newTodoField.value) {
    return;
  }

  const id = +new Date();

  currentTodos.push({
    id: id,
    title: newTodoField.value,
    completed: false,
  });

  initTodos();

  newTodoField.value = '';
  updateInfo();
});

// remove todo
itemsList.addEventListener('click', (event) => {
  if (!event.target.matches('.destroy')) {
    return;
  };

  const item = event.target.closest('.todo-item');
  currentTodos = currentTodos.filter(todo => todo.id !== +item.dataset.todoId);

  initTodos();

  updateInfo();
});

// toggle todo status
itemsList.addEventListener('change', (event) => {
  if (!event.target.matches('.toggle')) {
    return;
  };

  const item = event.target.closest('.todo-item');
  const selectedTodo = currentTodos.find(todo => todo.id === +item.dataset.todoId);

  selectedTodo.completed = event.target.checked;

  initTodos();
  updateInfo();
});

// clear completed
clearCompletedButton.addEventListener('click', () => {
  currentTodos = currentTodos.filter(todo => !todo.completed);
  initTodos();
  updateInfo();
});

// toggle all
allTogglers.addEventListener('change', () => {
  currentTodos.forEach(todo => {
    todo.completed = allTogglers.checked;
  });

  initTodos();
  updateInfo();
});

// filter todos
filter.addEventListener('click', (event) => {
  if (!event.target.dataset.filter) {
    return;
  }

  const filterButtons = root.querySelectorAll('[data-filter]');

  for (const button of filterButtons) {
    button.classList.toggle('selected', event.target === button);
  }
  const togglers = root.querySelectorAll('.toggle');

  for (const toggler of togglers) {
    const item = toggler.closest('.todo-item');

    switch (event.target.dataset.filter) {
      case 'all':
        item.hidden = false;
        break;

      case 'active':
        item.hidden = toggler.checked;
        break;

      case 'completed':
        item.hidden = !toggler.checked;
        break;
    }
  }
});
