import { create } from 'zustand'

export const useAppState = create((set) => ({
  name: 't-dev-game',
  description: 'Un juego de t-dev',
  version: 'v0.2.0'
}))
