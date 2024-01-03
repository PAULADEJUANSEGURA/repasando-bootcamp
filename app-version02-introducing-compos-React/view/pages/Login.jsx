function Login (){
    return <main className="login-view">
      <h1>Login</h1>
      <form action="submit" className="login-form">
        <label htmlFor="login-email" type="text">Email</label>
        <input type="text" name="email" id="login-email" placeholder="e-mail"></input>

        <label htmlFor="login-password" type="password">Password</label>
        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="password"
        ></input>

        <button type="submit">Login</button>
      </form>
      <p>Go to <a class="login-register-link" href="">Register</a></p>
    </main>
    }