//[CharacterCheckpointState.jsx]

import { create } from 'zustand'

const initialPos = [0, 2, 0]

export const useCheckpointStateLevel1 = create((set) => ({

    initialPosition: initialPos,
    checkpoint1: [28, 0.1, -7],
    checkpoint2: [40, 8.6, -45],
    checkpoint3: [36, 0.4, -157],
    checkpoint4: [-24, 0.1, -150],
    actualPosition: initialPos,

    setInitialPosition: (someposition) => set({ initialPosition: someposition }),
    setActualPosition: (someposition) => set({ actualPosition: someposition }),
    resetActualPosition: () => set({ initialPos })
}))
