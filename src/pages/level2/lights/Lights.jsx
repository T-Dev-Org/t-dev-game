import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { Color, Vector3 } from "three";
import { DirectionalLightHelper } from "three/src/Three.js";

const Lights = () => {

    const ambientLightRef = useRef();
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);

    const optionsAmbientLight = useMemo(() => {
        return {
            intensityAL: { value: 0.40, min: 0.00, max: 1.00, step: 0.01 }
        }
    })

    const optionsDirectionalLight = useMemo(() => {
        return {
            castShadowDL: true,
            intensityDL: { value: 1.4, min: 0, max: 6, step: 0.1 },
            positionDL: { value: [40, 20, 80] },
            targetPositionDL: { value: [30, 12, -40] }
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
            ref={ambientLightRef}
            intensity={intensityAL}
        />
        <directionalLight
            ref={directionalLightRef}
            castShadow={castShadowDL}
            position={positionDL}
            color={new Color("#FFF700")}
            intensity={intensityDL}
        />
    </>
}
export default Lights;
