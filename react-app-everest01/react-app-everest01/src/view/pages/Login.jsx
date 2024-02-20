import authenticateUser from '../../logic/authenticateUser.js'
import context from '../context.js'

function Login({onRegisterClick, onLoggedIn}){
   console.log('Login -> render')
    const handleRegisterClick = event => {
        event.preventDefault()
        onRegisterClick()
    }
    const handleLoginSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        try {
            authenticateUser(email, password)
                .then(token => {
                    context.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
      }
  return <><nav className="navbar navbar-expand-lg navbar-dark bg-personalized-color navbar-view">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <figure>
        <img src="../../../public/everest-logo-mountain.png" className="d-inline-block align-top" alt="Bootstrap"
          loading="lazy"></img>
        </figure>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2"
        aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent2">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <h2>Everest</h2>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Menú
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item register-link" href="#">Regístrate</a></li>
              <li><a className="dropdown-item login-link" href="#">Login</a></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search" action="https://www.google.com/search">
          <input className="form-control me-2" placeholder="Search" aria-label="Search" type="text" name="q">
          </input>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav><section className="login-view">
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card cascading-right">
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Si estuviste allí...</h2>
                  <h2 className="fw-bold mb-5">Accede a tu cuenta de Everest</h2>
                  <form className="login-form">
                    <h5 className="fw-normal mb-3 pb-3">Entra en tu cuenta</h5>
                    <div className="form-outline mb-4">
                      <input type="email" id="login-email" className="form-control form-control-lg">
                      </input>
                      <label className="form-label" htmlFor="form2Example17">Correo electrónico</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="login-password" className="form-control form-control-lg">
                      </input>
                      <label className="form-label" htmlFor="form2Example27">Contraseña</label>
                    </div>
                    <div className="pt-1 mb-4">
                      <h5 className="fw-normal mb-3 pb-3">Haz click aquí:</h5>
                      <button type="submit" className="btn btn-primary btn-block mb-4" onSubmit={handleLoginSubmit}>Login</button>
                    </div>
                    <div className="text-center">
                      <h6>Si no tienes cuenta creada</h6>
                      <h6><a className="login-register-link" href="" onClick={handleRegisterClick}>Regístrate</a></h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <figure>
              <img src="../../../public/yo-estuve-aqui-everest.jpg" className="rounded-4 shadow-4" alt=""></img>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </section></>
}
export default Login