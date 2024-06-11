import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { forwardRef, useRef, useState } from 'react'
import * as THREE from 'three'
import { useLifeState } from '../../../utils/components/controller/CharacterLife'
import { useAudio } from '../../../context/AudioContext'
import { useAvatar } from '../../../context/AvatarContext'

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const Obstacle = forwardRef(function Obstacle({ position, args, color = getRandomColor(), ...props }, ref) {
    const lifeState = useLifeState()
    const { playSoundEffect } = useAudio()
    const [lastHitTime, setLastHitTime] = useState(0)
    const hitCooldown = 1000 

    function onHit(event) {
        const now = Date.now()
        if (now - lastHitTime >= hitCooldown && event.other.colliderObject.name === 'character-capsule-collider') {
            lifeState.decrement()
            playSoundEffect('hit')
            setLastHitTime(now)
        } 
    }

    return (
        <RigidBody ref={ref} type="kinematicPosition" friction={2} restitution={0.6} position={position} onCollisionEnter={onHit}>
            <mesh receiveShadow castShadow>
                <boxGeometry args={args} />
                <meshStandardMaterial color={color} />
            </mesh>
        </RigidBody>
    )
})

const Spinner = function ({ speed = 1, initialShift = Math.random() * 10, invert = false, position, args=[37, 2, 1], color, ...props }) {
    const obstacleRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (obstacleRef.current) {
            const rotation = new THREE.Quaternion()
            rotation.setFromEuler(new THREE.Euler(0, (time * speed + initialShift) * (invert ? -1 : 1), 0))
            obstacleRef.current.setNextKinematicRotation(rotation)
        }
    })

    return <Obstacle ref={obstacleRef} position={position} args={args} color={color} {...props} />
}

const SlidingWall = function ({ speed = 1, initialShift = 0, args=[22,20,5], position, color, ...props }) {
    const obstacleRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (obstacleRef.current) {
            const obstacleTranslation = obstacleRef.current.translation()
            obstacleRef.current.setNextKinematicTranslation({
                x: Math.sin(time * speed + initialShift) * 5,
                y: obstacleTranslation.y,
                z: obstacleTranslation.z
            })
        }
    })

    return <Obstacle ref={obstacleRef} position={position} args={args} color={color} {...props} />
}

const Oscillating = function ({ speed = 1, amplitude = 5, initialShift = 0, position,color, args = [34, 15, 5], ...props }) {
    const obstacleRef = useRef()

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()

        if (obstacleRef.current) {
            const obstacleTranslation = obstacleRef.current.translation()
            obstacleRef.current.setNextKinematicTranslation({
                x: obstacleTranslation.x,
                y: Math.sin(time * speed + initialShift) * amplitude + position[1],
                z: obstacleTranslation.z
            })
        }
    })

    return <Obstacle ref={obstacleRef} position={position} args={args} color={color} {...props} />
}

Obstacle.Spinner = Spinner
Obstacle.SlidingWall = SlidingWall
Obstacle.Oscillating = Oscillating

export default Obstacle
