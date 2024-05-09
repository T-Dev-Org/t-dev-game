import {create} from 'zustand'

const initialDiamonds = 0;

// Estado global de coleccionables del personaje
export const useCollectablesState = create((set) => ({
    // Variables del estado
    title: "Diamonds", // Título del estado 
    value: initialDiamonds, // Cantidad inicial de diamantes
  
    // Funciones para modificar el estado de los coleccionables
    increment: () => set((state) => {value = state.value + 1}), 
    reset: () => set({ value: initialDiamonds }),    
  }));