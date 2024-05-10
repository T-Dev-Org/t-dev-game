import { useEffect, useState } from "react";
import Button from "../../../globals/interactables/Button"
import Level1WorldStairs from "../world/Level1WorldStairs";
import { create } from "zustand";

const debug = true
function print_debug(text) {
  if (debug) {
    console.log(`[Interactables.jsx]: ${text}`);
  }
}

export default function Interactables() {

  const [stateStairLevel1, setStateStairLevel1] = useState(false);

  const toggleStairs = () => {
    setStateStairLevel1((prevState) => !prevState);
  };

  return (<>
    <Button
      position={[0, -0.5, -158]}
      interactFunction={toggleStairs}
      onUpdateState={(newState) => updateObjectState(0, newState)}
    />
    {stateStairLevel1 &&
      <Level1WorldStairs
        position={[0, -1, 0]} />
    }

  </>)
}