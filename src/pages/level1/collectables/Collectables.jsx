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
      { id: 3, name: 'DiamondCone 4', isTaken: false, isCollected: false },
      { id: 4, name: 'DiamondCone 5', isTaken: false, isCollected: false },
      { id: 5, name: 'DiamondCone 6', isTaken: false, isCollected: false },
      { id: 6, name: 'DiamondCone 7', isTaken: false, isCollected: false },
      { id: 7, name: 'DiamondCone 8', isTaken: false, isCollected: false },
      { id: 8, name: 'DiamondCone 9', isTaken: false, isCollected: false },
      { id: 9, name: 'DiamondCone 10', isTaken: false, isCollected: false },
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
        position={[0, -1, -26]}
        onUpdateState={(newState) => updateObjectState(0, newState)}
      />

      <DiamondCone
        position={[0, 0, -50]}
        onUpdateState={(newState) => updateObjectState(1, newState)}
      />

      <DiamondCone
        position={[8.6, 1.6, -65.8]}
        onUpdateState={(newState) => updateObjectState(2, newState)}
      />

      <DiamondCone
        position={[-6, 4.3, -65.8]}
        onUpdateState={(newState) => updateObjectState(3, newState)}
      />
      <DiamondCone
        position={[0, 6.5, -82]}
        onUpdateState={(newState) => updateObjectState(4, newState)}
      />
      <DiamondCone
        position={[0, 6.5, -96]}
        onUpdateState={(newState) => updateObjectState(5, newState)}
      />

      <DiamondCone
        position={[0, 0, -120]}
        onUpdateState={(newState) => updateObjectState(6, newState)}
      />

      <DiamondCone
        position={[0, 0, -155]}
        onUpdateState={(newState) => updateObjectState(7, newState)}
      />

      <DiamondCone
        position={[0, 11, -198]}
        onUpdateState={(newState) => updateObjectState(8, newState)}
      />
      <DiamondCone
        position={[0, 11, -207]}
        onUpdateState={(newState) => updateObjectState(9, newState)}
      />
    </>
  );
}
