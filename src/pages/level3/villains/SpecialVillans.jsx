import React from 'react'
import Dog from '../../../globals/villains/Dog'

export default function SpecialVillans({ onEnemyDeath }) {
  return (
    <>
      <Dog
        position={[-7.5, 0, -240]}
        rotation={[0, 0, 0]}
        onDeath={onEnemyDeath}
      />
    </>
  )
}
