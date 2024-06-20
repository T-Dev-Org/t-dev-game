import { Perf } from 'r3f-perf'
import { KeyboardControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { Suspense, useState, useEffect } from 'react'
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
import { usePlayer } from '../../context/PlayerContext'
import { editUser, readUSer } from '../../utils/db/users-collection'
import {Model} from './world/Level4World'
import Obstacle from './obstacles/Obstacles'
import FallingBalls from './obstacles/FallingBall'
import { Button_Circle } from './abstractions/Button'
import { useNavigate } from 'react-router-dom'
import ZoneSensors from './world/ZoneSensors'

const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level4 () {
  const map = useMovements()
  const navigate = useNavigate()

  const {playerData} = usePlayer()
  const [isLoading, setIsLoading] = useState(true)

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const { actualPosition, setActualPosition, resetActualPosition } =
  useCharacterPositionState()

  const [shouldFall, setShouldFall] = useState(false)

  const startFallPosition = [0, 20, -220]
  const stopFallPosition = [0, 34.5, -72]


  useEffect(() => {
    const cargarPosicion = async () => {
      const infoJugador = await readUSer(playerData.email)
      if (infoJugador.success) {
        await setActualPosition(infoJugador.data.position)
      }
      setIsLoading(false)
    }
    cargarPosicion()
  }, [setActualPosition])


  useEffect(() => {
    if (lifeState.value <= 0) {
      // resetActualPosition()
      navigate('/gameOver')
      setDisplayLife(false)
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  useEffect(() => {
    if (actualPosition) {
      const [x, y, z] = actualPosition
      if (
        Math.abs(x - startFallPosition[0]) < 1 &&
        Math.abs(y - startFallPosition[1]) < 1 &&
        Math.abs(z - startFallPosition[2]) < 1
      ) {
        setShouldFall(true)
      }
      if (
        Math.abs(x - stopFallPosition[0]) < 1 &&
        Math.abs(y - stopFallPosition[1]) < 1 &&
        Math.abs(z - stopFallPosition[2]) < 1
      ) {
        setShouldFall(false)
      }
    }
  }, [actualPosition, startFallPosition, stopFallPosition])


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
            <Obstacle.Spinner position={[0,34.5,-130]} speed={2}/>
            <Obstacle.Spinner position={[0,34.5,-95]} speed={2}/>
            <Obstacle.SlidingWall position={[0,34.5,-60]} speed={1.5}/>
            <Obstacle position={[0,35,-40]} args={[37, 2, 4]}/>
            <Obstacle position={[0,36,-20]} args={[37, 2, 4]}/>
            <Obstacle position={[0,35,0]} args={[37, 2, 4]}/>
            <Obstacle.Oscillating position={[0,42.5,20]}/>
            <Obstacle.SlidingWall position={[0,34.5,40]} speed={2} />
            <Obstacle.Oscillating position={[0,42.5,60]} speed={1.5}/>
            <Obstacle.SlidingWall position={[0,34.5,80]} speed={2.5} />
            {shouldFall && <FallingBalls count={100} position={[0, 90, -150]} />}
            <Button_Circle position={[0,33.5,200]} ruta={'/profile'}/>
            <>
            {displayLife && actualPosition && !isLoading &&(
                <Ecctrl
                  camInitDis={-2}
                  camMaxDis={-2}
                  maxVelLimit={6}
                  jumpVel={6}
                  position={actualPosition}
                  onPositionChange={setActualPosition}
                  
                >
                  <Avatar />
                </Ecctrl>
              )}
              {isLoading && <Instructive />}
            </>
            <Villains villainsData={VillainsData} />
            <ZoneSensors/>
          </Physics>
          <Texts position={[0, 20, -220]} />
        </Suspense>
        <Controls />
      </Canvas>    
      <GameUI />
      {debug &&
        <NextLevelButton to='/profile' />}
    </KeyboardControls>
  )
}

export async function initializerPlayer(playerData, setPlayerData) {
  const user = {
    diamantes: playerData.diamantes,
    displayName: playerData.displayName,
    email: playerData.email,
    level: '/level4',
    position: [0, 20, -220],
    vidas: playerData.vidas
  }
  setPlayerData(user)
  await editUser(playerData.email, user)
}