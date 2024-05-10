export default function LoginComponent() {
  return (<>
    <div className='card rounded-4 text-center'>
      <div >
        <img
          className="logo-image my-4"
          src="/assets/images/t-dev/t-dev-logo-with-text.png"
          alt="Logo T-Dev con texto T-Dev"
        />
      </div>

      <h2 className="text-primary">La puerta a la dimension desconocida</h2>

      <form className="mx-4">
        <div className="my-4">
          <label className="form-label h4 my-2" htmlFor="inputEmail" >Correo Electrónico</label>
          <input className="form-control " type="email" id="inputEmail" aria-describedby="emailHelp" />
          <label className="form-label h4 my-2" htmlFor="inputPassword" >Contraseña</label>
          <input className="form-control" type="password" id="inputPassword" />
          <div>
            <button className="btn btn-outline-primary rounded-4 mt-4 mb-2" type="submit">
              Iniciar Sesión
            </button>
          </div>
          <div>
            <a className="btn btn-outline-primary rounded-4 my-2" href="level1" rel="noopener noreferrer">
              Iniciar como Invitado
            </a>
          </div>
        </div>
      </form>
    </div>
  </>)
}