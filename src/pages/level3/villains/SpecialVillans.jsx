import React from 'react'
import Coc from '../../../globals/villains/Coc'

export default function SpecialVillans({ onEnemyDeath }) {
  return (
    <>
      <Coc
        position={[-7.5, 0, -240]}
        rotation={[0, 0, 0]}
        onDeath={onEnemyDeath}
      />
    </>
  )
}
