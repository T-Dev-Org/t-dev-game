import { create } from 'zustand'

// Estado global de interacciones de personaje
// attack: Almacena una funcion para ejecutar o nada.
// isActive: Estado de la accion, se está ejecutando?
export const useCharacterBasicAttack = create((set) => ({
  name: 'CharacterBasicAttack',
  action: null,
  isActive: false,

  assign: (interactionFunction) => set({ action: interactionFunction }),
  clear: () => set({ action: null }),
  active: () => set({ isActive: true }),
  deactive: () => set({ isActive: false })
}))
