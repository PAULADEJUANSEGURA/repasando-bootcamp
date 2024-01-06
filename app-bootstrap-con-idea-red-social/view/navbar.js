const navbarView = document.querySelector('.navbar-view');
const loginView = document.querySelector('.login-view');
const registerView = document.querySelector('.register-view');

const navbarRegisterLink = navbarView.querySelector('.register-link');

navbarRegisterLink.onclick = function (event){
    event.preventDefault();
    registerView.classList.remove('off');
    loginView.classList.add('off');
}

const navbarLoginLink = navbarView.querySelector('.login-link')

navbarLoginLink.onclick = function (event){
    event.preventDefault();
    loginView.classList.remove('off');
    registerView.classList.add('off');
}