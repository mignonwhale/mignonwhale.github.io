const loginForm = document.querySelector('#login-form'); // required, maxlength의 브라우저 validation 체크 기능은 form 태그 안에서만 사용 가능
const loginName = document.querySelector('#login-name');
const greeting = document.querySelector('#greeting');

const weatherWrap = document.querySelector('.weather-wrap');
const clockSpan2 = document.querySelector('#clock');
const todoContainer = document.querySelector('.todo-container');
const quoteContainer = document.querySelector('.quote-container');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginName.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello, ${username}`; 
    weatherWrap.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clockSpan2.classList.remove(HIDDEN_CLASSNAME);
    todoContainer.classList.remove(HIDDEN_CLASSNAME);    
    quoteContainer.classList.remove(HIDDEN_CLASSNAME);    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

