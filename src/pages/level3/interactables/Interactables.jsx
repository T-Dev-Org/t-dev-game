import { useState } from 'react'
import Button from '../../../globals/interactables/Button'
import Level3Door from '../world/Level3Door'

const debug = true
function print_debug (text) {
  if (debug) {
    console.log(`[Interactables.jsx]: ${text}`)
  }
}

export default function Interactables () {
    const [stateDoor, setStateDoor] = useState(true)

    const toggleDoor = () => {
      setStateDoor((prevState) => !prevState)
    }

    return (
      <>
        <Button
          position={[-15, 0, -205]}
          interactFunction={toggleDoor}
          onUpdateState={(newState) => updateObjectState(0, newState)}
        />

        {stateDoor &&
          <Level3Door />
        }
      </>
    )
  }