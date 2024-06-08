import React from 'react'
import Dog from '../../../globals/villains/Dog'

export default function SpecialVillans ({ onEnemyDeath }) {
  return (
    <>
      <Dog
        position={[-25, 19, -102]}
        rotation={[0, Math.PI / 2, 0]}
        onDeath={onEnemyDeath}
      />
    </>
  )
}
