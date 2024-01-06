function Login(props) {
  const handleRegisterClick = event => {
    event.preventDefault()
    props.onRegisterClick()
  }
  return <div>
  <nav classname="navbar navbar-expand-lg navbar-dark bg-personalized-color navbar-view">
    <div classname="container-fluid">
      <a classname="navbar-brand" href="#">
        <img src="everest-logo-mountain.png" width={90} height={90} className="d-inline-block align-top" alt="Bootstrap" loading="lazy" />
      </a>
      <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon" />
      </button>
      <div classname="collapse navbar-collapse" id="navbarSupportedContent2">
        <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
          <li classname="nav-item">
            <h2>Everest</h2>
          </li>
          <li classname="nav-item dropdown">
            <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menú
            </a>
            <ul classname="dropdown-menu">
              <li><a classname="dropdown-item register-link" href="#">Regístrate</a></li>
              <li><a classname="dropdown-item login-link" href="#">Login</a></li>
            </ul>
          </li>
        </ul>
        <form classname="d-flex" role="search" action="https://www.google.com/search">
          <input classname="form-control me-2" placeholder="Search" aria-label="Search" type="text" name="q" />
          <button classname="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <section classname="login-view">
    <section classname="text-center text-lg-start">
      <div classname="container py-4">
        <div classname="row g-0 align-items-center">
          <div classname="col-lg-6 mb-5 mb-lg-0">
            <div classname="card cascading-right" style={{width: 500, background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)', borderRadius: '1rem'}}>
              <div classname="card-body p-5 shadow-5 text-center">
                <h2 classname="fw-bold mb-5">Si estuviste allí...</h2>
                <h2 classname="fw-bold mb-5">Accede a tu cuenta de Everest</h2>
                <form classname="login-form" action="submit">
                  <h5 classname="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Entra en tu cuenta</h5>
                  <div classname="form-outline mb-4">
                    <input type="email" id="login-email" className="form-control form-control-lg" />
                    <label classname="form-label" htmlfor="form2Example17">Correo electrónico</label>
                  </div>
                  <div classname="form-outline mb-4">
                    <input type="password" id="login-password" className="form-control form-control-lg" />
                    <label classname="form-label" htmlfor="form2Example27">Contraseña</label>
                  </div>
                  <div classname="pt-1 mb-4">
                    <h5 classname="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Haz click aquí:</h5>
                    <button type="submit" classname="btn btn-primary btn-block mb-4">
                      Login
                    </button>
                  </div>
                  <div classname="text-center">
                    <h6>Si no tienes cuenta creada</h6>
                    <h6><a classname="login-register-link" href>Regístrate</a></h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div classname="col-lg-6 mb-5 mb-lg-0">
            <img src="yo-estuve-aqui-everest.jpg" width="500px" className="rounded-4 shadow-4" alt />
          </div>
        </div>
      </div>
    </section>
  </section>
</div>
}