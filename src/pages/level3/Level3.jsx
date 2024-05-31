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
            <Level3World />
            <Ecctrl
              camInitDis={-2}
              camMaxDis={-2}
              maxVelLimit={5}
              jumpVel={4}
              position={[0, 2, 0]}
            >
              <Avatar />
            </Ecctrl>
          </Physics>
          <Texts />
        </Suspense>
        <Controls />
      </Canvas>
      {/* <GameUI /> */}
      {debug &&
        <NextLevelButton to='/level4' />}
    </KeyboardControls>
  )
}
