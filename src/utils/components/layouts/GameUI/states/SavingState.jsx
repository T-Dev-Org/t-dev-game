import { create } from 'zustand'

export const useSavingState = create((set) => ({
  isSaving: false,
  activeSaving: () => set({ isSaving: true }),
  deactiveSaving: () => set({ isSaving: false })
}))
