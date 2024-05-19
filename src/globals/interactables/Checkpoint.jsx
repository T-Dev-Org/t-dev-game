import React from 'react'
import { CuboidCollider } from '@react-three/rapier'
import { useAudio } from '../../context/AudioContext'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import { guardarEnLocalStorage } from '../../utils/localStorageUtils'
import { useSavingState } from '../../utils/components/layouts/GameUI/states/SavingState'

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

  const handleIntersectionEnter = (event, themeName, soundEffect = 'none') => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      if (themeName !== 'continue') { handlePlayMusic(themeName) }
      if (soundEffect !== 'none') { playSoundEffect(soundEffect) }
    }
  }

  const handleCheckpoint = (event) => {
    if (event.colliderObject.name === 'character-capsule-collider') {
      positionState.setActualPosition(props.position)
      guardarEnLocalStorage('actualPosition', props.position)
      print_debug(`${props.name} reached`)
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
