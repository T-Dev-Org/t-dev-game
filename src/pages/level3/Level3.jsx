// [Level3.jsx]
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
import Level3World from './world/Level3World'
import Texts from './abstractions/Texts'
// import Collectables from "./collectables/Collectables";
import GameUI from '../../utils/components/layouts/GameUI/GameUI'
import NextLevelButton from '../../utils/components/layouts/GameUI/components/NextLevelButton'
// import ZoneSensors from "./world/ZoneSensors";
import Checkpoints from '../../globals/interactables/CheckpointsGenerator'
import checkpointsData from './checkpoints/CheckpointsData.json'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import { obtenerDeLocalStorage } from '../../utils/localStorageUtils'
import Collectables from '../../globals/collectables/CollectablesGenerator'
import collectablesData from './collectables/CollectablesData.json'
import Villains from '../../globals/villains/VillainsGenerator'
import VillainsData from './villains/VillainsData.json'
import GameOverScene from '../../utils/components/layouts/GameOverScene/GameOverScene'
import Interactables from './interactables/Interactables'
import PortalNextWorld from '../../globals/interactables/PortalNextWorld'
import { editUser, readUSer } from '../../utils/db/users-collection'
import { usePlayer } from '../../context/PlayerContext'
import SpecialVillans from './villains/SpecialVillans'
import SymbolicSensors from './world/SymbolicSensors'
import { useNavigate } from 'react-router-dom'
import { initializerPlayer } from '../level4/Level4'
import Player2 from './world/Player2'


const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level3 () {
  const map = useMovements()
  const navigate = useNavigate()

  const {playerData, setPlayerData} = usePlayer()
  const [isLoading, setIsLoading] = useState(true)

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const { actualPosition, setActualPosition, resetActualPosition } =
  useCharacterPositionState()

  const [showPortal, setShowPortal] = useState(true)

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
      resetActualPosition()
      setDisplayLife(false)
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  const handleEnemyDeath = useCallback(() => {
    setShowPortal(true)
  }, [])  

  const handleNextLevel = async () => {
    await initializerPlayer(playerData, setPlayerData); 
    navigate('/level4');
  };

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
            <Level3World />
            <>
            {displayLife && actualPosition && !isLoading &&(
              <>
                <Ecctrl
                  camInitDis={-2}
                  camMaxDis={-2}
                  maxVelLimit={4}
                  jumpVel={3}
                  position={actualPosition}
                  slopeMaxAngle={Math.PI / 5.5}
                >
                  <Avatar />
                </Ecctrl>
                <Player2 />
              </>
              )}
              {isLoading && <Instructive />}
            </>
            <>
              {showPortal && (
                <PortalNextWorld
                  position={[-7.5, 0, -263]}
                  rotation={[0, Math.PI / 2, 0]}
                  nextLevel= {handleNextLevel}
              />)}
            </>
            <SpecialVillans onEnemyDeath={handleEnemyDeath} />
            <Villains villainsData={VillainsData} />
            <SymbolicSensors />
            <Interactables />
          </Physics>
          <Texts />
        </Suspense>
        <Controls />
      </Canvas>
      {!displayLife && <GameOverScene reloadLevel='/level3' />}      
      <GameUI />
      {debug &&
        <NextLevelButton to='/level4' />}
    </KeyboardControls>
  )
}

export async function initializeUser(playerData, setPlayerData) {
  const user = {
    diamantes: playerData.diamantes,
    displayName: playerData.displayName,
    email: playerData.email,
    level: '/level3',
    position: [0, 10, -2],
    vidas: playerData.vidas
  }
  setPlayerData(user)
  await editUser(playerData.email, user)
}