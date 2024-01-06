const registerView = document.querySelector('.register-view');
const registerForm = registerView.querySelector('.register-form');


registerForm.onsubmit = function (event) {
    event.preventDefault();
    
    // Toma el valor del input name
    const nameInput = registerForm.querySelector('#register-name');
    const name = nameInput.value;

    // Toma el valor del input lastname
    const lastNameInput = registerForm.querySelector('#register-lastName');
    const lastName = lastNameInput.value;
    
    // Toma el valor del input email
    const emailInput = registerForm.querySelector('#register-email');
    const email = emailInput.value;

    // Toma el valor del input password
    const passwordInput = registerForm.querySelector('#register-password');
    const password = passwordInput.value;

    // Toma el valor del checkbox
    const subscribeInput = registerForm.querySelector('#register-subscribe');
    const subscribe = subscribeInput.checked; 

    const result = registerUser(name, lastName, email, password, subscribe);

    if (result === false)
        alert('User already exists')
    else {
        registerView.classList.add('off')
        loginView.classList.remove('off')
    }

}

const registerLoginLink = registerView.querySelector('.register-login-link')


registerLoginLink.onclick = function (event){
    event.preventDefault()
    loginView.classList.remove('off') 
    registerView.classList.add('off')
}

