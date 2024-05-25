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
import { createUser, readUSer } from '../../utils/db/users-collection'
import Villains from '../../globals/villains/VillainsGenerator'
import VillainsData from './villains/VillainsData.json'


const debug = process.env.REACT_APP_DEBUG === 'true'

export default function Level1() {
  const map = useMovements()

  const auth = useAuth()

  const saveDataUser = async (valuesUser) => {
    await createUser(valuesUser)
  }

  const readDataUser = async (email) => {
    await readUSer(email)
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (auth.userLogged) {
      const { displayName, email } = auth.userLogged

      saveDataUser({
        displayName: displayName,
        email: email
      })

      const result = readDataUser(email)
      console.log(result)
    }
  }, [auth.userLogged])

  const lifeState = useLifeState()
  const [displayLife, setDisplayLife] = useState(true)

  const positionState = useCharacterPositionState()
  const [actualPosition, setActualPosition] = useState(
    positionState.initialPosition
  )

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
              <PortalNextWorld position={[0, 0, -224]} nextLevel='/level2' />
              <Checkpoints checkpointsData={checkpointsData} />
              <Collectables collectablesData={collectablesData} />
              <Interactables />
              <SymbolicSensors />
              <ZoneSensors />
              <>
                {displayLife && (
                  <Ecctrl
                    camInitDis={-2}
                    camMaxDis={-2}
                    maxVelLimit={5}
                    jumpVel={4}
                    position={actualPosition}
                  >
                    <Avatar />
                  </Ecctrl>
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
