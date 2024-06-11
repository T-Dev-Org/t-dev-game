import { Perf } from 'r3f-perf'
import { KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Suspense, useState, useEffect, useCallback } from 'react'
import { Canvas } from '@react-three/fiber'
import Instructive from '../../utils/components/layouts/instructive/Instructive'
import useMovements from '../../utils/key-movements'
import Controls from '../../utils/controls/Controls'
import Ecctrl from 'ecctrl'
import Avatar from '../../utils/avatar/Avatar'
import Lights from './lights/Lights'
import Environments from './staging/Environments'
import Texts from './abstractions/Texts'
import GameUI from '../../utils/components/layouts/GameUI/GameUI'
import NextLevelButton from '../../utils/components/layouts/GameUI/components/NextLevelButton'
import Checkpoints from '../../globals/interactables/CheckpointsGenerator'
import checkpointsData from './checkpoints/CheckpointsData.json'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import Collectables from '../../globals/collectables/CollectablesGenerator'
import collectablesData from './collectables/CollectablesData.json'
import Villains from '../../globals/villains/VillainsGenerator'
import VillainsData from './villains/VillainsData.json'
import GameOverScene from '../../utils/components/layouts/GameOverScene/GameOverScene'
import { usePlayer } from '../../context/PlayerContext'
import { readUSer } from '../../utils/db/users-collection'
import {Model} from './world/Level4World'
import { obtenerDeLocalStorage } from '../../utils/localStorageUtils'
import Obstacle from './obstacles/Obstacles'
import FallingBalls from './obstacles/FallingBall'
import { Button_Circle } from './abstractions/Button'

const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level4 () {
  const map = useMovements()

  const {playerData} = usePlayer()
  // const [isLoading, setIsLoading] = useState(true)

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const { actualPosition, setActualPosition, resetActualPosition } =
  useCharacterPositionState()


  const [showPortal, setShowPortal] = useState(false)

  // useEffect(() => {
  //   const cargarPosicion = async () => {
  //     const infoJugador = await readUSer(playerData.email)
  //     if (infoJugador.success) {
  //       await setActualPosition(infoJugador.data.position)
  //     }
  //     setIsLoading(false)
  //   }
  //   cargarPosicion()
  // }, [setActualPosition])


  useEffect(() => {
    if (lifeState.value <= 0) {
      resetActualPosition()
      setDisplayLife(false)
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  const handleEnemyDeath = useCallback(() => {
    setShowPortal(true)
  }, [])  

  return (
    <KeyboardControls map={map}>
      <Canvas shadows>
        <Suspense fallback={<Instructive />}>
          {debug &&
            <Perf position='top-left' />}
          <Lights />
          <Environments />
          <Physics debug={debug}>
            <Checkpoints checkpointsData={checkpointsData} />
            <Collectables collectablesData={collectablesData} />
            <Model />
            <Obstacle.Spinner position={[0,34.5,90]} speed={2}/>
            <Obstacle.Spinner position={[0,34.5,130]} speed={2}/>
            <Obstacle.SlidingWall position={[0,34.5,168]} speed={1.5}/>
            <Obstacle position={[0,35,190]} args={[37, 2, 4]}/>
            <Obstacle position={[0,36,210]} args={[37, 2, 4]}/>
            <Obstacle.Oscillating position={[0,42.5,228]}/>
            {/* <FallingBalls count={20} position={[0,100,61]}/> */}
            <Button_Circle position={[0,34,280]} ruta={'/profile'}/>
            <>
            {displayLife &&(
                <Ecctrl
                  camInitDis={-2}
                  camMaxDis={-2}
                  maxVelLimit={6}
                  jumpVel={6}
                  // position={actualPosition}
                  position={[0,9,2]}
                  
                >
                  <Avatar />
                </Ecctrl>
              )}
              {/* {isLoading && <Instructive />} */}
            </>
            <Villains villainsData={VillainsData} />
          </Physics>
          <Texts position={[0, 7, 12]} />
        </Suspense>
        <Controls />
      </Canvas>
      {!displayLife && <GameOverScene reloadLevel='/level4' />}      
      <GameUI />
      {debug &&
        <NextLevelButton to='/profile' />}
    </KeyboardControls>
  )
}

export async function initializeUser(playerData, setPlayerData) {
  const user = {
    diamantes: playerData.diamantes,
    displayName: playerData.displayName,
    email: playerData.email,
    level: '/level4',
    position: [0,9,2],
    vidas: playerData.vidas
  }
  setPlayerData(user)
  await editUser(playerData.email, user)
}