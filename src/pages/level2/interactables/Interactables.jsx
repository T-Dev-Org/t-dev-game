// [Interactables.jsx]
import { useEffect, useState } from "react";
import Button from "../../../globals/interactables/Button"

export default function Interactables() {

  const [objectStates, setObjectStates] = useState([]);

  const printHola = () => {
    console.log("Hola")
  }

  const printAdios = () => {
    console.log("Adios")
  }

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
    console.log("objectStates ha cambiado a", objectStates);
  }, [objectStates]);

  return (<>
    <Button
      position={[-2, 0, 2]}
      interactFunction={printHola}
      onUpdateState={(newState) => updateObjectState(0, newState)}
    />

    <Button
      position={[-2, 0, -2]}
      interactFunction={printAdios}
      onUpdateState={(newState) => updateObjectState(0, newState)}
    />
  </>)
}