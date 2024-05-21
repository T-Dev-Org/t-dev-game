// [Level2.jsx]
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
import Level2World from './world/Level2World'
import Level2WorldZone1 from './world/Level2WorldZone1'
import Level2WorldZone2 from './world/Level2WorldZone2'
import Texts from './abstractions/Texts'
import GameUI from '../../utils/components/layouts/GameUI/GameUI'
import NextLevelButton from '../../utils/components/layouts/GameUI/components/NextLevelButton'
import Interactables from './interactables/Interactables'
import { useLifeState } from '../../utils/components/controller/CharacterLife'
import GameOverScene from '../../utils/components/layouts/GameOverScene/GameOverScene'
import SymbolicSensors from './world/SymbolicSensors'
import PortalNextWorld from '../../globals/interactables/PortalNextWorld'
import { useCharacterPositionState } from '../../utils/components/controller/CharacterPositionState'
import collectablesData from './collectables/CollectablesData.json'
import checkpointsData from './checkpoints/CheckpointsData.json'
import Collectables from '../../globals/collectables/CollectablesGenerator'
import Checkpoints from '../../globals/interactables/CheckpointsGenerator'
import { obtenerDeLocalStorage } from '../../utils/localStorageUtils'
import ManualColliders from './world/ManualColliders'
import Level2WorldZone3 from './world/Level2WorldZone3'
import Level2WorldZone4 from './world/Level2WorldZone4'

const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level2 () {
  const map = useMovements()

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const positionState = useCharacterPositionState()
  const [actualPosition, setActualPosition] = useState(positionState.initialPosition)

  useEffect(() => {
    if (obtenerDeLocalStorage('actualPosition')) { setActualPosition(obtenerDeLocalStorage('actualPosition')) }
  }, obtenerDeLocalStorage('actualPosition'))

  useEffect(() => {
    if (lifeState.value <= 0) { setDisplayLife(false) } else { setDisplayLife(true) }
  }, [lifeState.value])

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas
          shadows
        >
          {debug &&
            <Perf position='top-left' />}
          <Suspense fallback={<Instructive />}>
            <Lights />
            <Environments />
            <Physics debug={debug}>
              <Checkpoints checkpointsData={checkpointsData} />
              <Collectables collectablesData={collectablesData} />
              <Level2World />
              <Level2WorldZone1 />
              <Level2WorldZone2 />
              <Level2WorldZone3 />
              <Level2WorldZone4 />
              <ManualColliders />
              <SymbolicSensors />
              <Interactables />
              <PortalNextWorld
                position={[-24, 20, -102]}
                nextLevel='/level3'
              />
              {displayLife &&
                <Ecctrl
                  camInitDis={-2}
                  camMaxDis={-2}
                  maxVelLimit={4}
                  jumpVel={3}
                  position={actualPosition}
                  slopeMaxAngle={Math.PI / 5.5}
                >
                  <Avatar />
                </Ecctrl>}
            </Physics>
            <Texts />
          </Suspense>
          <Controls />
        </Canvas>
        {!displayLife &&
          <GameOverScene
            reloadLevel='/level2'
          />}
        <GameUI />
        {debug &&
          <NextLevelButton to='/level3' />}
      </KeyboardControls>
    </>
  )
}
