// [Collectables.jsx]
import React, { useState, useEffect } from 'react';
import DiamondCone from './DiamondCone';

export default function Collectables() {
  const [diamondConeState, setDiamondConeState] = useState({ isTaken: false, isCollected: false });

  useEffect(() => {
    console.log("Estado de DiamondCone actualizado:", diamondConeState);
  }, [diamondConeState]);

  return (
    <>
      <DiamondCone
        position={[2, 0, 1]}
        onUpdateState={(newState) => setDiamondConeState(newState)}
      />
    </>
  );
}