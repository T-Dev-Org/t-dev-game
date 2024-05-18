// [CollectablesGenerator.jsx]

import React, { useState, useEffect } from 'react';
import DiamondCone from "./DiamondCone";

const debug = false;

function print_debug(text) {
  if (debug) {
    console.log(`[Collectables.jsx]: ${text}`);
  }
}

export default function Collectables({ collectablesData }) {
  const [collectables, setCollectables] = useState([]);

  useEffect(() => {
    setCollectables(collectablesData.collectables);
  }, []);

  useEffect(() => {
    console.log("collectables ha cambiado a", collectables);
  }, [collectables]);

  const updateCollectableState = (id, newState) => {
    setCollectables(prevCollectables =>
      prevCollectables.map(collectable =>
        collectable.id === id ? { ...collectable, ...newState } : collectable
      )
    );
  };

  return (
    <>
      {collectables.map((collectable) => (
        <DiamondCone
          key={collectable.id}
          position={collectable.position}
          onUpdateState={(newState) => updateCollectableState(collectable.id, newState)}
        />
      ))}
    </>
  );
}
