// [CornerTopRight.jsx]
import React, { useEffect, useState } from 'react'
import './CornerTopRight.css'
import { useLifeState } from '../../../controller/CharacterLife'
import { useCollectablesState } from '../../../controller/CharacterCollectables'
import { set } from 'firebase/database'

const CornerTopRight = ({ life, playerName }) => {
  const displayLife = useLifeState()
  const diamondsCount = useCollectablesState()
  const displayPlayerName = playerName ?? 'undefined'
  const [vida, setVida] = useState('')
  const [diamantes, setDiamantes] = useState('')

  useEffect(() => {
    setVida('')
    for (let i = 0; i < displayLife.value; i++) {
      setVida((prevVida) => prevVida + '❤️')
    }
  }, [displayLife.value])

  useEffect(() => {
    setDiamantes('')
    for (let i = 0; i < diamondsCount.value; i++) {
      setDiamantes((prevDiamantes) => prevDiamantes + '💎')
    }
  }, [diamondsCount.value])

  return (
    <div className='container-top-right'>
      <div className='life-label'>{vida}</div>
      <div className='life-bar' style={{ width: `${displayLife}%` }} />
      <div className='diamond-count'>{diamantes}</div>
    </div>
  )
}

export default CornerTopRight
