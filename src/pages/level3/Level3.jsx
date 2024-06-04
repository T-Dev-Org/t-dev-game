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

const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level3 () {
  const map = useMovements()

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const positionState = useCharacterPositionState()
  const [actualPosition, setActualPosition] = useState(
    positionState.initialPosition
  )

  const [showPortal, setShowPortal] = useState(false)

  useEffect(() => {
    if (obtenerDeLocalStorage('actualPosition')) {
      setActualPosition(obtenerDeLocalStorage('actualPosition'))
    }
  }, obtenerDeLocalStorage('actualPosition'))

  useEffect(() => {
    if (lifeState.value <= 0) {
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
            <Level3World />
            {displayLife && (
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
              )}
            <Villains villainsData={VillainsData} />
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
