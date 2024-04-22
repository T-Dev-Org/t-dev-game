import { Color } from "three";

const Lights = () => {
    return <>
        <ambientLight
            intensity={0}
        />
        {/*<directionalLight
            castShadow={true}
            position={[2, 10, 0]}
            /*color={new Color("#5C169B")}
            intensity={2}
            shadow-mapSize = {[2048, 2048]}
            shadow-camera-far = {100}
            shadow-camera-left = {-10}
            shadow-camera-right = {10}
            shadow-camera-top = {10}
            shadow-camera-bottom = {-100}
        />*/}
        <ambientLight
            color={new Color("#FF0000")}
            intensity={1}   
        />
        <pointLight
            color={new Color("#FFF700")}
            intensity={100}
            position={[1, 0, 0]}
        />
        <spotLight
            color={new Color("#00FF2A")}
            intensity={100}
            position={[-1, 0, 0]}
        />        

    </>
}
export default Lights;