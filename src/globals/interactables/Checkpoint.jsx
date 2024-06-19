import React from 'react'
import { CuboidCollider } from '@react-three/rapier'
import { useAudio } from '../../context/AudioContext'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import { guardarEnLocalStorage } from '../../utils/localStorageUtils'
import { useSavingState } from '../../utils/components/layouts/GameUI/states/SavingState'
import { editUser, readUSer } from '../../utils/db/users-collection'
import { usePlayer } from '../../context/PlayerContext'

const debug = true

function print_debug (text) {
  if (debug) {
    console.log(`[Checkpoint.jsx]: ${text}`)
  }
}

export default function Checkpoint (props) {
  const { handlePlayMusic } = useAudio()
  const { playSoundEffect } = useAudio()
  const savingState = useSavingState()
  const positionState = useCharacterPositionState()
  const {playerData} = usePlayer()

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      if (themeName !== 'continue') { handlePlayMusic(themeName) }
      if (soundEffect !== 'none') { playSoundEffect(soundEffect) }
    }
  }

  const handleCheckpoint = async (event) => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      try {
        const user = { 
          displayName: playerData.displayName,
          email: playerData.email,
          vidas: 3,
          diamantes: 0, 
          level: playerData.level,
          position: props.position }
        positionState.setActualPosition(props.position)
        const actualUser = await editUser(playerData.email, user)
        console.log("Usuario actualizado: ", actualUser)
        guardarEnLocalStorage('actualPosition', props.position)
        print_debug(`${props.name} reached`)
      } catch (error) {
        console.error('Error al editar el usuario:', error)
      }
    }
  }

  return (
    <CuboidCollider
      {...props}
      onIntersectionEnter={(event) => {
        savingState.activeSaving()
        handleCheckpoint(event)
      }}
      sensor
    />
  )
}
