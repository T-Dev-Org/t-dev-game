// [CharacterCheckpointState.jsx]

import { create } from 'zustand'

const initialPos = [0, 2, 0]

export const useCharacterPositionState = create((set) => ({

  initialPosition: initialPos,
  actualPosition: initialPos,

  setActualPosition: (someposition) => set({ actualPosition: someposition }),
  resetActualPosition: () => set({ initialPos })
}))
