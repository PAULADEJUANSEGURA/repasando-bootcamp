/*
 
Global Scope */

let userId = null;

// Queremos pasar a REACT este elemento (DOM NORMAL)
const root = document.querySelector('#root');


// Conectamos el virtual DOM y vamos a usar React (VIRTUAL DOM)
const virtualRoot = ReactDOM.createRoot(root);

// Creamos un h1 en React en el VIRTUAL DOM
const title = React.createElement('h1', null, 'Hola mundo desde el virtual root de React * ');

const color1 = React.createElement('li', null, 'Red'); 
const color2 = React.createElement('li', null, 'Blue');

const colors = React.createElement('ul', null, color1, color2);

virtualRoot.render([title, colors]);

/* 
<main class="register-view">
      <h1>Register</h1>
      <form action="submit" class="register-form">
        <label for="register-name">Name</label>
        <input type="text" name="name" id="register-name" placeholder="Name" />

        <label for="register-email" type="text">Email</label>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="e-mail"
        />
        <label for="register-password">Password</label>
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <button type="submit">Register</button>
      </form>
      <p>Go to <a class="register-login-link" href="">Login</a></p>
    </main>


    <main class="login-view off">
      <h1>Login</h1>
      <form action="submit" class="login-form">
        <label for="login-email" type="text">Email</label>
        <input type="text" name="email" id="login-email" placeholder="e-mail" />

        <label for="login-password" type="password">Password</label>
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="password"
        />

        <button type="submit">Login</button>
      </form>
      <p>Go to <a class="login-register-link" href="">Register</a></p>
    </main>


    <div class="home-view off">
      <header>
        <h1 class="home-title">Hello, Home!</h1>
        <button class="home-logout-button">Logout</button>
      </header>

      <main class="home-main">
        <section class="home-posts"></section>
      </main>

      <footer class="home-footer">
        <button class="home-create-post-button">+</button>
      </footer>
      <div class="home-create-post-modal off">
        <div class="home-create-post-container">
          <h2>Create post</h2>
          <form class="home-create-post-form">
            <label for="create-post-url">Image</label>
            <input id="create-post-url" type="url" />

            <label for="create-post-text">Text</label>
            <textarea id="create-post-text"></textarea>

            <button type="submit">Create</button>
            <button class="home-create-post-cancel-button">Cancel</button>
          </form>
        </div>
      </div>
  
      <div class="home-edit-post-modal off">
        <div class="home-edit-post-container">
          <h2>Edit post</h2>
          <form class="home-edit-post-form">
            <input type="hidden" id="edit-post-id">

            <label for="edit-post-url">Image</label>
            <input id="edit-post-url" type="url" />

            <label for="edit-post-text">Text</label>
            <textarea id="edit-post-text"></textarea>

            <button type="submit">Save changes</button>
            <button class="home-edit-post-cancel-button">Cancel</button>
          </form>
        </div>
      </div>

      <div class="home-delete-post-modal off">
        <div class="home-delete-post-container">
          <h2>Delete post</h2>
          <form class="home-delete-post-form">

            <input type="hidden" id="delete-post-id">

            <button type="submit">Delete</button>
            <button class="home-delete-post-cancel-button">Cancel</button>
          </form>
        </div>
      </div>
    </div>
    */