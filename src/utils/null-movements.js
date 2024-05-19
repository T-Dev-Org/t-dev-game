import { useMemo } from 'react'

export default function nullMovements () {
  const MOVEMENTS = {
    forward: 'forward',
    backward: 'backward',
    leftward: 'leftward',
    rightward: 'rightward',
    jump: 'jump',
    exit: 'exit',
    run: 'run',
    dance: 'dance',
    basic_attack: 'basic_attack'
  }

  const map = useMemo(() => {
    return []
  }, [])

  return map
}
