import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Color, Vector3 } from "three";
import { DirectionalLightHelper } from "three/src/Three.js";

const Lights = () => {

    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    const optionsDirectionalLight = useMemo(() => {
        return {
            intensityDL: { value: 1.4, min: 0, max: 6, step: 0.1 },
            positionDL: { value: [40, 20, 80] },
            targetPosition: { value: [30, 10, -40] }
        }
    })

    const { intensityDL, positionDL, targetPosition } = useControls("DirectionalLight", optionsDirectionalLight);

    // Calcular el vector de dirección hacia el objetivo
    const direction = useMemo(() => {
        const lightPosition = new Vector3().fromArray(positionDL);
        const target = new Vector3().fromArray(targetPosition);
        return target.sub(lightPosition).normalize();
    }, [positionDL, targetPosition]);

    return <>
        <ambientLight
            intensity={0.8}
        />
        <directionalLight
            ref={directionalLightRef}
            castShadow={true}
            position={positionDL}
            color={new Color("#FFF700")}
            intensity={intensityDL}
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={100}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-100}
            target={directionalLightRef.current?.target} // Usar condicional opcional
        />
        {directionalLightRef.current && (
            <primitive object={directionalLightRef.current.target} position={targetPosition} />
        )}
    </>
}
export default Lights;
