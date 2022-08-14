
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoInfo = document.querySelector('#todo-info');
const todoClearRow = document.querySelector('#todo-clear-row');

let todos = [];
let savedTodosLength = 0;
let delFlag = true;

const TODOS_KEY = 'todos';
const HIDDEN_KEY = 'hidden';

function changeCheckIcon(checkIcon) {
    const checked = `fa-solid fa-circle-check fa-xs`;
    const unchecked = `fa-solid fa-circle fa-xs`;

    if (checkIcon.className === checked) {
        checkIcon.className = unchecked;
    } else {
        checkIcon.className = checked;
    }
}
function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function delTodo(event) {
    const checkIcon = event.target;
    
    // 체크박스로 모양 변경
    changeCheckIcon(checkIcon);

    // 텍스트 취소선
    const span = checkIcon.nextSibling;
    const delTag = document.createElement('del');
    delTag.innerText = span.innerText;
    span.innerText = '';
    span.append(delTag);
    
    // 삭제태그 달기
    event.target.parentElement.className = 'delRow';

    // localstorage 업데이트
    todos = todos.filter(e => e.id != checkIcon.id);
    saveTodo();
}

function paintTodo(newTodo) {
    const todoRow = document.createElement('li');

    const todoText = document.createElement('span');
    todoText.innerText = newTodo.text;

    const checkIcon = document.createElement('i');
    checkIcon.id = newTodo.id;
    checkIcon.className = 'fa-solid fa-circle fa-xs';
    checkIcon.addEventListener('click', delTodo);    
   
    todoRow.appendChild(checkIcon);
    todoRow.appendChild(todoText);
    todoList.appendChild(todoRow);
}


function changeTodoInputArea() {    
    if(todos.length >= 3){
        todoInfo.classList.remove(HIDDEN_KEY);
        todoForm.classList.add(HIDDEN_KEY);
        return false;
    } else {
        todoInfo.classList.add(HIDDEN_KEY);
        todoForm.classList.remove(HIDDEN_KEY);
        return true;
    }
}
function onSubmitTodo(event) {
    event.preventDefault();
    
    const newTodo = todoInput.value 
    todoInput.value = '';

    if (!changeTodoInputArea()) {
        return;
    }
   
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

function onClickClear() {
    const delRow = document.getElementsByClassName('delRow');
    const delRowLength = delRow.length;

    for (let i = delRowLength - 1; i >= 0; i--) {
        delRow[i].remove();        
    }
    changeTodoInputArea();
}

todoForm.addEventListener('submit', onSubmitTodo);
todoClearRow.addEventListener('click', onClickClear);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parseedTodos = JSON.parse(savedTodos);
    parseedTodos.forEach(paintTodo);
    todos = parseedTodos;
} 


