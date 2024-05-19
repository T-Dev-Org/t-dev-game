import { useState } from 'react'
import Button from '../../../globals/interactables/Button'
import Level2Door1 from '../world/Level2Door1'

const debug = true
function print_debug (text) {
  if (debug) {
    console.log(`[Interactables.jsx]: ${text}`)
  }
}

export default function Interactables () {
  const [stateDoor1Level2, setStateDoor1Level2] = useState(true)

  const toggleDoor1Level2 = () => {
    setStateDoor1Level2((prevState) => !prevState)
  }

  return (
    <>
      {/* PostCheckpoint 1 Button */}
      <Button
        position={[24, 0, -10]}
        interactFunction={toggleDoor1Level2}
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />
      <Button
        position={[40, 0.2, -157.5]}
        // interactFunction={toggleStairs} // Example
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />

      {stateDoor1Level2 &&
        <Level2Door1 />}

    </>
  )
}
