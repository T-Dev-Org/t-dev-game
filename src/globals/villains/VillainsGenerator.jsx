// [VillainsGenerator.jsx]

import React, { useState, useEffect } from 'react'
import Rat from './Rat'

export default function Villains ({ villainsData }) {
  const [villains, setVillains] = useState([])

  useEffect(() => {
    setVillains(villainsData.villains)
  }, [])

  useEffect(() => {
    console.log('Change on villains:', villains)
  }, [villains])

  const updateVillainState = (id, newState) => {
    setVillains(prevVillains =>
      prevVillains.map(villain =>
        villain.id === id ? { ...villain, ...newState } : villain
      )
    )
  }
  return (
    <>
      {villains.map((villain) => (
        <Rat
          key={villain.id}
          position={villain.position}
          rotation={villain.rotation}
          pattern={villain.pattern}
          onUpdateState={(newState) => updateVillainState(villain.id, newState)}
        />
      ))}
    </>
  )
}
