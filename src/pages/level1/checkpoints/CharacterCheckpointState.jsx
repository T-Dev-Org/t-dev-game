//[CharacterCheckpointState.jsx]

import {create} from 'zustand'

const actualPosition = [0, 0, 0];

export const useCheckpointState = create((set) => ({

    initialPosition: [0, 0, 0],
    checkpoint1: [0, 1, -39.55],
    checkpoint2: [0, 6.5, -76],
    checkpoint3: [0, 6, -103.4],
    checkpoint4: [0, 1, -150],
    valueActualPosition: actualPosition,

    setActualPosition: () => set((state) => ({
        actualPosition: state.valueActualPosition,
    })),
    resetActualPosition: () => set({initialPosition})
}))
