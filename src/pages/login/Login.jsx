import "./stylesLogin.css";
import { Link } from 'react-router-dom';

export default function Login() {

    return (
        <div className="container text-center">
            <div>
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" className="img-fluid" />
            </div>
            <div className="mt-4">
                <h2>Bienvenido a<br />T-Dev Game</h2>
            </div>
            <form className="mt-4">
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-danger">Iniciar Sesión</button>
            </form>
            <div className="mt-3">
                <Link to="/level1" className="btn btn-danger">Iniciar como Invitado</Link>
            </div>
        </div>
    );
}
