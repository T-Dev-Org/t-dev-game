import { useState } from 'react'
import Button from '../../../globals/interactables/Button'
import Level2Door1 from '../world/Level2Door1'
import Level2Platforms from '../world/Level2Platforms'

const debug = true
function print_debug(text) {
  if (debug) {
    console.log(`[Interactables.jsx]: ${text}`)
  }
}

export default function Interactables() {
  const [stateDoor1Level2, setStateDoor1Level2] = useState(true)
  const [statePlatforms, setStatePlatforms] = useState(false)

  const toggleDoor1Level2 = () => {
    setStateDoor1Level2((prevState) => !prevState)
  }

  const togglePlatforms = () => {
    setStatePlatforms((prevState) => !prevState)
  }

  return (
    <>
      {/* PostCheckpoint 1 Button */}
      <Button
        position={[24, 0, -10]}
        interactFunction={toggleDoor1Level2}
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />
      {/* PostCheckpoint 2 Button */}
      <Button
        position={[42, 0.2, -157.5]}
        interactFunction={togglePlatforms}
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />

      {stateDoor1Level2 &&
        <Level2Door1 />}

      {statePlatforms &&
        <Level2Platforms />}
    </>
  )
}
