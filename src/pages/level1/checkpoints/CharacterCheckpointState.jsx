//[CharacterCheckpointState.jsx]

import { create } from 'zustand'

const initialPos = [0, 2, 0]

export const useCheckpointState = create((set) => ({

    initialPosition: initialPos,
    checkpoint1: [0, 2, -39.55],
    checkpoint2: [0, 7.5, -76],
    checkpoint3: [0, 8, -103.4],
    checkpoint4: [0, 9, -150],
    actualPosition: initialPos,

    setInitialPosition: (someposition) => set({ initialPosition: someposition }),
    setActualPosition: (someposition) => set({ actualPosition: someposition }),
    resetActualPosition: () => set({ initialPos })
}))
