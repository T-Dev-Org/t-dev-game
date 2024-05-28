import { json, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import {readUSer, createUser} from '../../../utils/db/users-collection'
import {usePlayer} from '../../../context/PlayerContext'

export default function LoginComponent() {
  const navigate = useNavigate();
  const auth = useAuth();
  const {playerData, setPlayerData} = usePlayer();

  const onHandleButtonLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.loginWithGoogle();
      await verificar(result.user,setPlayerData, navigate);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
    }
  };

  return (
    <div className='card rounded-4 text-center'>
      <div>
        <img
          className='logo-image my-4'
          src='/assets/images/t-dev/t-dev-logo-with-text.png'
          alt='Logo T-Dev con texto T-Dev'
        />
      </div>

      <h2 className='text-primary'>La puerta a la dimension desconocida</h2>
        <form className='mx-4'>
          <div className='my-4'>
            <div>
              <button
                onClick={(e) => onHandleButtonLogin(e)}
                className='btn btn-outline-primary rounded-4 my-2'
              >
                Iniciar con Google
              </button>
            </div>
            <div>
              <button
                className='btn btn-outline-primary rounded-4 mt-4 mb-2'
                onClick={() => {
                  navigate('/level1')
                }}
              >
                Iniciar como invitado
              </button>
            </div>

          </div>
          <div>
            <button
              onClick={onHandleButtonLogin}
              className='btn btn-outline-primary rounded-4 my-2'
            >
              Iniciar con Google
            </button>
          </div>
        </form>
    </div>
  );
}

async function verificar(user, setPlayerData, navigate) {
  try {
    const { displayName, email } = user;
    const result = await readUSer(email);
    if (result.success) {
      setPlayerData(result.data)
      navigate('/level1');
    } else {
      const newUser = {
        email,
        displayName,
        vidas: 3, // Valor inicial para vidas
        diamantes: 0, // Valor inicial para diamantes
        position: [0, 2, 0],
      };
      await createUser(newUser);
      setPlayerData(newUser);
      navigate('/level1');
    }
  } catch (error) {
    console.error('Error al leer el usuario:', error);
  }
}

