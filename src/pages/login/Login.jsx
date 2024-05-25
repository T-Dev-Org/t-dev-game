import './Login.css'
import LoginComponent from './components/LoginComponent'
import { useAppState } from '../../globals/AppState'
import { limpiarLocalStorage } from '../../utils/localStorageUtils'
import { useEffect } from 'react'

export default function Login() {
  const appState = useAppState()

  useEffect(() => {
    limpiarLocalStorage()
  }, [])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col mx-auto my-auto login-container'>
            <LoginComponent />
          </div>
        </div>
        <div className='bottom-left'>{appState.description}</div>
        <div className='bottom-right'>{appState.version}</div>
      </div>
    </>
  )
}
