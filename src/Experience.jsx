import { AvatarProvider } from './context/AvatarContext'
import RoutesTDevGame from './routes/RoutesTDevGame'
import { AudioProvider } from './context/AudioContext'
import { AuthProvider } from './context/AuthContext'

const Experience = () => {
  return (
    <AuthProvider>
      <AudioProvider>
        <AvatarProvider>
          <RoutesTDevGame />
        </AvatarProvider>
      </AudioProvider>
    </AuthProvider>
  )
}

export default Experience
