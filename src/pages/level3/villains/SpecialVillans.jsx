import React from 'react'
import Coc from '../../../globals/villains/Coc'
import Dog from '../../../globals/villains/Dog'

export default function SpecialVillans({ onEnemyDeath }) {
  return (
    <>
      <Coc
        position={[-7.5, 0.2, -240]}
        rotation={[0, 0, 0]}
        onDeath={onEnemyDeath}
      />
    </>
  )
}
