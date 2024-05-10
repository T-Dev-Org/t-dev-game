// [Interactables.jsx]
import { useEffect, useState } from "react";
import Button from "../../../globals/interactables/Button"

const debug = true
function print_debug(text) {
  if (debug) {
    console.log(`[Interactables.jsx]: ${text}`);
  }
}

export default function Interactables() {

  const [objectStates, setObjectStates] = useState([]);

  useEffect(() => {
    const initialObjectStates = [
      { id: 0, name: 'Button 1', canInteract: false },
    ];
    setObjectStates(initialObjectStates);
  }, []);

  const updateObjectState = (id, newState) => {
    setObjectStates(prevStates =>
      prevStates.map(objectState =>
        objectState.id === id ? { ...objectState, ...newState } : objectState
      )
    );
  };

  useEffect(() => {
    print_debug("objectStates ha cambiado a", objectStates);
  }, [objectStates]);

  return (<>

  </>)
}