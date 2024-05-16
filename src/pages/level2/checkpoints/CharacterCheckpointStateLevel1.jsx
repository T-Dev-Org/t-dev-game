//[CharacterCheckpointState.jsx]

import { create } from 'zustand'

const initialPos = [0, 2, 0]

export const useCheckpointStateLevel1 = create((set) => ({

    initialPosition: initialPos,
    checkpoint1: [28, 3, -7],
    checkpoint2: [40, 13, -45],
    checkpoint3: [36, 3, -157],
    checkpoint4: [-24, 2.5, -150],
    actualPosition: initialPos,

    setInitialPosition: (someposition) => set({ initialPosition: someposition }),
    setActualPosition: (someposition) => set({ actualPosition: someposition }),
    resetActualPosition: () => set({ initialPos })
}))
