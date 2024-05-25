import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

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
        </form>
      </div>
    </>
  )
}
