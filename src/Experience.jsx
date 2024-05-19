import { AvatarProvider } from './context/AvatarContext'
import RoutesTDevGame from './routes/RoutesTDevGame'
import { AudioProvider } from './context/AudioContext'

const Experience = () => {
  return (
    <AudioProvider>
      <AvatarProvider>
        <RoutesTDevGame />
      </AvatarProvider>
    </AudioProvider>
  )
}

export default Experience
