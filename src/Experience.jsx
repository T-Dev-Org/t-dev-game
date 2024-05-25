import { AvatarProvider } from './context/AvatarContext'
import RoutesTDevGame from './routes/RoutesTDevGame'
import { AudioProvider } from './context/AudioContext'
import { AuthProvider } from './context/AuthContext'
import { PlayerProvider } from './context/PlayerContext'

const Experience = () => {
  return (
    <AuthProvider>
      <PlayerProvider>
      <AudioProvider>
        <AvatarProvider>
          <RoutesTDevGame />
        </AvatarProvider>
      </AudioProvider>
      </PlayerProvider>
    </AuthProvider>
  )
}

export default Experience
