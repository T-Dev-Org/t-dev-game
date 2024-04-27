import { BakeShadows, useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { Color, Vector3 } from "three";
import { DirectionalLightHelper, SpotLightHelper } from "three/src/Three.js";

const Lights = () => {
    const ambientLightRef = useRef();
    const directionalLightRef = useRef();
    const spotLightRef = useRef();
    const showHelpers = true
 
    if (showHelpers) {
        useHelper(directionalLightRef, DirectionalLightHelper);
        useHelper(spotLightRef, SpotLightHelper);
    }    

    const optionsAmbientLight = useMemo(() => {
        return {
            intensityAL: { value: 0.40, min: 0.00, max: 1.00, step: 0.01 }
        }
    })

    const optionsDirectionalLight = useMemo(() => {
        return {
            castShadowDL: true,
            intensityDL: { value: 0.1, min: 0, max: 6, step: 0.1 },
            positionDL: { value: [40, 20, 80] },
            targetPositionDL: { value: [-8, 2, -213] }
        }
    })    

    const { intensityAL } = useControls("Ambient Light", optionsAmbientLight);
    const { castShadowDL, intensityDL, positionDL, targetPositionDL } = useControls("directionalLight", optionsDirectionalLight);

    useEffect(() => {
        console.log("Light updated")
        if (directionalLightRef.current && directionalLightRef.current.target) {
            directionalLightRef.current.target.position.fromArray(targetPositionDL);
        }
    }, [targetPositionDL]);    

    return <>
        <ambientLight
            color={new Color("#e51a4c")}
            intensity={intensityAL}
            position={[0,0,100]}            
        />
        
        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.6}
            position={[0, 1, 0]}
            angle = {Math.PI}
        />

        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.6}
            position={[-20, 0.5, -6]}
            angle = {Math.PI}
        />       

        <spotLight
            color={new Color("#FFFfff")}
            intensity={0.1}
            position={[10, 2.5, -220]}
            angle = {Math.PI}
        />    
        
        <pointLight
            color={new Color("#FFF700")}
            intensity={1}
            position={[10, 2.5, -218]}
        />        

        <directionalLight
            ref={directionalLightRef}
            castShadow={castShadowDL}
            position={positionDL}
            color={new Color("#FFFF00")}
            intensity={intensityDL}
        // shadow-mapSize={[2048, 2048]}
        // shadow-camera-far={100}
        // shadow-camera-left={-10}
        // shadow-camera-right={10}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-100}
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
        />*/}{/*
        <ambientLight
            color={new Color("#FF0000")}
            intensity={0.5}   
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
    />   */}     

    </>
}
export default Lights;