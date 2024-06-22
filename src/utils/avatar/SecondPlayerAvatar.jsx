import { useEffect, useRef, useState } from 'react'
import { useAvatar } from '../../context/AvatarContext'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useLifeState } from '../components/controller/CharacterLife'

const debug = false

function print_debug (text) {
  if (debug) {
    console.log(`[SecondPlayerAvatar.jsx]: ${text}`)
  }
}

export default function Avatar () {
  const avatarRef = useRef()
  const { avatar } = useAvatar()
  const { nodes, materials, animations } = useGLTF('/assets/models/Cat/Cat.glb')

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  useEffect(() => {
    if (lifeState.value <= 0) {
      setDisplayLife(false)
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  const { actions } = useAnimations(animations, avatarRef)
  useEffect(() => {
    actions[avatar.animation]?.reset().play()
    return () => {
      if (actions[avatar.animation]) { actions[avatar.animation].fadeOut(0.5) }
    }
  }, [actions, avatar.animation])

  return (
    <>
      {displayLife &&
        <group ref={avatarRef}dispose={null}>
            <group name="Scene">
                <group name="Cat">
                <skinnedMesh
                    name="Brazos"
                    geometry={nodes.Brazos.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Brazos.skeleton}
                />
                <skinnedMesh
                    name="Cabeza"
                    geometry={nodes.Cabeza.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Cabeza.skeleton}
                />
                <skinnedMesh
                    name="Colita"
                    geometry={nodes.Colita.geometry}
                    material={nodes.Colita.material}
                    skeleton={nodes.Colita.skeleton}
                />
                <skinnedMesh
                    name="Nariz"
                    geometry={nodes.Nariz.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Nariz.skeleton}
                />
                <skinnedMesh
                    name="Ojos"
                    geometry={nodes.Ojos.geometry}
                    material={materials['Material.001']}
                    skeleton={nodes.Ojos.skeleton}
                />
                <skinnedMesh
                    name="Orejas"
                    geometry={nodes.Orejas.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Orejas.skeleton}
                />
                <skinnedMesh
                    name="Patas"
                    geometry={nodes.Patas.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Patas.skeleton}
                />
                <skinnedMesh
                    name="Tronco"
                    geometry={nodes.Tronco.geometry}
                    material={materials['Material.002']}
                    skeleton={nodes.Tronco.skeleton}
                />
                <primitive object={nodes.spine} />
                <primitive object={nodes.spine003} />
                <primitive object={nodes.tailboneroot} />
                <primitive object={nodes.Ctrl_Master} />
                <primitive object={nodes.neutral_bone} />
                </group>
            </group>
            </group>
        }
      {!displayLife}
    </>
  )
}
