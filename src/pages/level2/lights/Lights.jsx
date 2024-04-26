// [Lights.jsx]
import * as THREE from 'three';
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { Color, Vector3 } from "three";
import { DirectionalLightHelper } from "three/src/Three.js";


const Lights = () => {

    // Debug
    const showHelpers = true

    // Specific Refs
    const mainAmbientLightRef = useRef();
    const mainDLRef = useRef();

    // General Refs
    const ambientLightRef = useRef();
    const directionalLightRef = useRef();

    // Targets
    const mainLightTarget = new THREE.Object3D();
    mainLightTarget.position.set(28, 14, -40);
    const zone1sub3DLTarget = new THREE.Object3D();
    zone1sub3DLTarget.position.set(28, 2, -40);

    if (showHelpers) {
        useHelper(mainDLRef, DirectionalLightHelper);
        useHelper(directionalLightRef, DirectionalLightHelper);
    }

    // const optionsAmbientLight = useMemo(() => {
    //     return {
    //         intensityAL: { value: 0.40, min: 0.00, max: 1.00, step: 0.01 }
    //     }
    // })

    // const optionsDirectionalLight = useMemo(() => {
    //     return {
    //         castShadowDL: true,
    //         intensityDL: { value: 0.2, min: 0, max: 6, step: 0.1 },
    //         positionDL: { value: [40, 20, 80] },
    //         targetPositionDL: { value: [28, 14, -40] },
    //     }
    // })

    // const { intensityAL } = useControls("Ambient Light", optionsAmbientLight);
    // const { castShadowDL, intensityDL, positionDL } = useControls("directionalLight", optionsDirectionalLight);

    return <>
        <ambientLight
            ref={mainAmbientLightRef}
            intensity={0.40}
        />
        <directionalLight
            ref={mainDLRef}
            castShadow={true}
            position={[40, 20, 80]}
            color={new Color("#FFF700")}
            intensity={0.2}
            target={mainLightTarget}
        />
        <directionalLight
            ref={directionalLightRef}
            castShadow={true}
            position={[40, 20, 80]}
            color={new Color("#FFF700")}
            intensity={1}
            target={zone1sub3DLTarget}
        />
    </>
}
export default Lights;
