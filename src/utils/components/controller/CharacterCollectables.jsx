import { create } from 'zustand'
import { useLifeState } from './CharacterLife'

const initialDiamonds = 0
const lifeState = useLifeState.getState()

export const useCollectablesState = create((set) => ({
  title: 'Diamonds',
  value: initialDiamonds,

  increment: () => set((state) => {
    const newValue = state.value + 1
    if (newValue % 10 === 0) {
      if (lifeState.value < lifeState.maximumLife) {
        lifeState.increment()
      }
    }
    return { value: newValue }
  }),

  reset: () => set({ value: initialDiamonds })
}))
