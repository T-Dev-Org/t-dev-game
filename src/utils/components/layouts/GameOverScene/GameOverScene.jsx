// [GameOverScene.jsx]
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GameOverScene.css'

const debug = true

function print_debug (text) {
  if (debug) {
    console.log(`[GameOverScene.jsx]: ${text}`)
  }
}

const GameOverScene = ({ ...props }) => {
  const navigate = useNavigate()
  const mainMenu = props.mainMenu ? props.reloadLevel : '/'
  const reloadLevel = props.reloadLevel ? props.reloadLevel : '/level1'

  return (
    <>
      <div className='complete-scene'>
        <div className='container-fluid-game-over text-center my-auto'>
          <h1 className='dead-title'> Game Over </h1>
          <div className='spacer-4' />
          <h1 className='play-again-text'> ¿Jugar de nuevo? </h1>
          <div className='spacer-2' />
          <div className='game-over-buttons-container'>
            <button
              className='btn-game-over' onClick={() => {
                navigate(mainMenu)
              }}
            > Menú Principal
            </button>
            <button
              className='btn-game-over' onClick={() => {
                navigate(0)
              }}
            > Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameOverScene
