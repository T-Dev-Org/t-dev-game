import { useMemo } from 'react'

export default function useMovements () {
  const MOVEMENTS = {
    forward: 'forward',
    backward: 'backward',
    leftward: 'leftward',
    rightward: 'rightward',
    run: 'run',
    jump: 'jump',
    dance: 'dance',
    basic_attack: 'basic_attack',
    interact: 'interact',
    exit: 'exit'
  }

  const map = useMemo(() => {
    return [
      { name: MOVEMENTS.forward, keys: ['KeyW'] },
      { name: MOVEMENTS.backward, keys: ['KeyS'] },
      { name: MOVEMENTS.leftward, keys: ['KeyA'] },
      { name: MOVEMENTS.rightward, keys: ['KeyD'] },
      { name: MOVEMENTS.run, keys: ['Shift'] },
      { name: MOVEMENTS.jump, keys: ['Space'] },
      { name: MOVEMENTS.dance, keys: ['KeyQ'] },
      { name: MOVEMENTS.basic_attack, keys: ['KeyR'] },
      { name: MOVEMENTS.interact, keys: ['KeyE'] },
      { name: MOVEMENTS.exit, keys: ['Escape'] }
    ]
  }, [])

  return map
}
