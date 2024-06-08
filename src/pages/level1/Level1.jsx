// [Level1.jsx]
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
import Level1World from './world/Level1World'
import Texts from './abstractions/Texts'
import GameUI from '../../utils/components/layouts/GameUI/GameUI'
import Rat from '../../globals/villains/Rat'
import ZoneSensors from './world/ZoneSensors'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import nullMovements from '../../utils/null-movements'
import GameOverScene from '../../utils/components/layouts/GameOverScene/GameOverScene'
import Interactables from './interactables/Interactables'
import PortalNextWorld from '../../globals/interactables/PortalNextWorld'
import Button from '../../globals/interactables/Button'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import collectablesData from './collectables/CollectablesData.json'
import checkpointsData from './checkpoints/CheckpointsData.json'
import Collectables from '../../globals/collectables/CollectablesGenerator'
import Checkpoints from '../../globals/interactables/CheckpointsGenerator'
import { obtenerDeLocalStorage } from '../../utils/localStorageUtils'
import SymbolicSensors from './world/SymbolicSensors'
import NextLevelButton from '../../utils/components/layouts/GameUI/components/NextLevelButton'
import Logout from '../../utils/components/layouts/logout/Logout'
import Villains from '../../globals/villains/VillainsGenerator'
import VillainsData from './villains/VillainsData.json'
import { readUSer } from '../../utils/db/users-collection'
import { usePlayer } from '../../context/PlayerContext'
import { useNavigate } from 'react-router-dom'
import { initializeUser } from '../level2/Level2'


const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level1() {
  const map = useMovements()
  const navigate = useNavigate()

  const {playerData, setPlayerData} = usePlayer()
  const [isLoading, setIsLoading] = useState(true)

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const { actualPosition, setActualPosition, resetActualPosition } = useCharacterPositionState();

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
      resetActualPosition();
      setDisplayLife(false)
    } else {
      setDisplayLife(true)
    }
  }, [lifeState.value])

  const handleNextLevel = async () => {
    await initializeUser(playerData, setPlayerData); 
    navigate('/level2');
  };



  return (
    <>
      <KeyboardControls map={map}>
        <Logout />
        <Canvas shadows>
          {debug && <Perf position='top-left' />}
          <Suspense fallback={<Instructive />}>
            <Lights />
            <Environments />
            <Physics debug={debug}>
              <Level1World />
              <PortalNextWorld position={[0, 0, -224]} nextLevel={handleNextLevel} />
              <Checkpoints checkpointsData={checkpointsData} />
              <Collectables collectablesData={collectablesData} />
              <Interactables />
              <SymbolicSensors />
              <ZoneSensors />
              <>
                {displayLife && !isLoading && actualPosition && (
                  <Ecctrl
                    camInitDis={-2}
                    camMaxDis={-2}
                    maxVelLimit={5}
                    jumpVel={4}
                    position={actualPosition}
                    onPositionChange={setActualPosition}
                  >
                    <Avatar />
                  </Ecctrl>
                )}

                {displayLife && isLoading && (
                  <Instructive />
                )}
              </>
              <Button position={[0, -0.5, -158]} />
              <Villains villainsData={VillainsData} />
            </Physics>  
            <Texts />
          </Suspense>
          <Controls />
        </Canvas>
        {!displayLife && <GameOverScene reloadLevel='/level1' />}
        {debug && <NextLevelButton to='/level2' />}
        <GameUI />
      </KeyboardControls>
    </>
  )
}
