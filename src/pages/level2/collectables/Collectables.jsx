// [Collectables.jsx]
import React, { useState, useEffect } from 'react';
import DiamondCone from "../../../globals/collectables/DiamondCone"

export default function Collectables() {
  const [objectStates, setObjectStates] = useState([]);

  useEffect(() => {
    const initialObjectStates = [
      { id: 0, name: 'DiamondCone 1', isTaken: false, isCollected: false },
      { id: 1, name: 'DiamondCone 2', isTaken: false, isCollected: false },
      { id: 2, name: 'DiamondCone 3', isTaken: false, isCollected: false },
      { id: 3, name: 'DiamondCone 4', isTaken: false, isCollected: false }
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

  return (
    <>
      <DiamondCone
        position={[2, 0, 0]}
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />

      <DiamondCone
        position={[2, 0, 1]}
        onUpdateState={(newState) => updateObjectState(1, newState)}
      />

      <DiamondCone
        position={[-2, 0, 0]}
        onUpdateState={(newState) => updateObjectState(2, newState)}
      />

      <DiamondCone
        position={[-2, 0, 1]}
        onUpdateState={(newState) => updateObjectState(3, newState)}
      />
    </>
  );
}
