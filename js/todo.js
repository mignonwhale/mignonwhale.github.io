
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];
let savedTodosLength = 0;

const TODOS_KEY = 'todos';

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delTodo(event) {
    const span = event.target.nextSibling;
    const delTag = document.createElement('del');
    delTag.innerText = span.innerText;
    span.innerText = '';
    span.append(delTag);

    // localstorage 업데이트
    todos = todos.filter(e => e.id != event.target.id);
    saveTodo();
}

function paintTodo(newTodo) {
    const newLi = document.createElement('li');

    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = newTodo.id;
    newCheckbox.addEventListener('click', delTodo);

    const newSpan = document.createElement('span');
    newSpan.innerText = newTodo.text;
  
    newLi.appendChild(newCheckbox);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
}

function onSubmitTodo(event) {
    event.preventDefault();
    console.log(todos);
    if(todos.length === 3){
        alert('only 3 todos possible');
        todoInput.value = '';
        return;
    }
    const newTodo = todoInput.value 
    todoInput.value = '';
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}
todoForm.addEventListener('submit', onSubmitTodo);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parseedTodos = JSON.parse(savedTodos);
    parseedTodos.forEach(paintTodo);
    todos = parseedTodos;
} 
