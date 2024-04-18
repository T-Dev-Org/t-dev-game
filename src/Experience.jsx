import { AvatarProvider } from "./context/AvatarContext";
import RoutesTDevGame from "./routes/RoutesTDevGame"

const Experience = () => {
    return (
        <AvatarProvider>
            <RoutesTDevGame />
        </AvatarProvider>
    )
}

export default Experience;