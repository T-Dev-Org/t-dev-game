import "./Login.css";
import LoginComponent from "./components/LoginComponent";

export default function Login() {

    return (<>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col mx-auto my-auto login-container'>
                    <LoginComponent />
                </div>
            </div>
            <div className="bottom-left">
                Un videojuego de T-Dev
            </div>
            <div className="bottom-right">
                v1.0
            </div>
        </div>
    </>
    );
}
