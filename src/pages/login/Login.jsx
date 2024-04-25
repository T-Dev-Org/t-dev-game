import "./stylesLogin.css";
import {Link} from 'react-router-dom'
export default function Login() {
    const onHandleButtonStart = () => {
        console.log("Iniciar Juego");
    }

    return (
        <div className="container">
            <div className="logo-univalle">
                <img src="/assets/images/logo-univalle.png" alt="Logo Universidad del Valle" />
            </div>
            <div className="title-squid-games">
                Bienvenido a<br />T-Dev Game
            </div>
            <div onClick={onHandleButtonStart} className="button-start">
                <Link to="/level1" className="button">Iniciar</Link>
            </div>
        </div>
    );

}