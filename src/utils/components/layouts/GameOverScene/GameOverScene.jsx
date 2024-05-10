// [GameOverScene.jsx]
import React from 'react';
import './GameOverScene.css';

const GameOverScene = ({ ...props }) => {

  const mainMenu = props.mainMenu ? props.reloadLevel : '/'
  const reloadLevel = props.reloadLevel ? props.reloadLevel : '/level1'

  return (
    <>
      <div className="complete-scene">
        <div className='container-fluid text-center my-auto'>
          <h1 className='dead-title'> Game Over </h1>
          <div className='spacer-4'></div>
          <h1 className='play-again-text'> ¿Jugar de nuevo? </h1>
          <div className='spacer-2'></div>
          <div className='game-over-buttons-container'>
            <a className='btn-game-over' href={mainMenu}> Menú Principal </a>
            <a className='btn-game-over' href={reloadLevel}> Jugar de nuevo </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameOverScene;