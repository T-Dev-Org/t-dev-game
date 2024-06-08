// [CharacterCheckpointState.jsx]

import { create } from 'zustand'

export const useCharacterPositionState = create((set) => ({
  actualPosition: null,

  setActualPosition: (someposition) => set({ actualPosition: someposition }),
  resetActualPosition: () => set({ actualPosition: [0, 10, -2] }) 
}));

