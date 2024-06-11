import React from 'react'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

const FallingBall = ({ position, radius = 1 }) => {
    return (
        <RigidBody type="dynamic" position={position} restitution={0.5}>
            <mesh castShadow>
                <sphereGeometry args={[radius, 32, 32]} />
                <meshStandardMaterial color={new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`)} />
            </mesh>
        </RigidBody>
    )
}

const FallingBalls = ({ count = 10, position }) => {
    const ballPositions = Array.from({ length: count }, () => [
        position[0] + (Math.random() - 0.5) * 20,
        position[1] + Math.random() * 10,
        position[2] + (Math.random() - 0.5) * 20
    ])

    return (
        <>
            {ballPositions.map((pos, index) => (
                <FallingBall key={index} position={pos} />
            ))}
        </>
    )
}

export default FallingBalls
