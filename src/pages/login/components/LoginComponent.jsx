import { json, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { readUSer, createUser } from '../../../utils/db/users-collection'
import { usePlayer } from '../../../context/PlayerContext'
import './LoginComponent.css'

export default function LoginComponent() {
  const navigate = useNavigate()
  const auth = useAuth()
  const { playerData, setPlayerData } = usePlayer()

  const onHandleButtonLogin = async (e) => {
    e.preventDefault()
    try {
      const result = await auth.loginWithGoogle()
      await verificar(result.user, setPlayerData, navigate)
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error)
    }
  }

  return (
    <>
      <div className='card rounded-4 text-center'>
        <div>
          <img
            className='logo-image my-4'
            src='/assets/images/t-dev/t-dev-logo-with-text.png'
            alt='Logo T-Dev con texto T-Dev'
          />
        </div>
        <h2 className='text-primary'>La puerta a la dimension desconocida</h2>
        <div className='my-4'>
          <button
            onClick={onHandleButtonLogin}
            className='btn btn-outline-secondary rounded-4 my-2'
          >
            <div className='d-flex flex-row'>
              <div className='mx-1'>
                <img
                  className='rounded-circle bg-white p-1 login-icon'
                  src='/assets/images/icons/google.png'
                  alt='google-icon'
                />
              </div>
              <div className='sign-in-text mx-1'>Iniciar con Google</div>
            </div>
          </button>
          <div>
            <button
              className='btn btn-outline-secondary rounded-4 my-2'
              onClick={() => {
                navigate('/level1')
              }}
            >
              <div className='d-flex flex-row'>
                <img
                  className='rounded-circle bg-white p-1 login-icon'
                  src='/assets/images/icons/perfil-desconocido.png'
                  alt='google-icon'
                />
                <div className='sign-in-text mx-2'>Iniciar como invitado</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

async function verificar(user, setPlayerData, navigate) {
  try {
    const { displayName, email } = user
    const result = await readUSer(email)
    if (result.success) {
      setPlayerData(result.data)
      navigate('/level1')
    } else {
      const newUser = {
        email,
        displayName,
        vidas: 3, // Valor inicial para vidas
        diamantes: 0 // Valor inicial para diamantes
      }
      await createUser(newUser)
      setPlayerData(newUser)
      navigate('/level1')
    }
  } catch (error) {
    console.error('Error al leer el usuario:', error)
  }
}
