import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import './LoginComponent.css'

export default function LoginComponent() {
  const navigate = useNavigate()
  const auth = useAuth()

  const onHandleButtonLogin = async (e) => {
    e.preventDefault()
    await auth
      .loginWithGoogle()
      .then((res) => {
        navigate('/level1')
      })
      .catch((error) => {
        console.log(error)
      })
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
            onClick={(e) => onHandleButtonLogin(e)}
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
