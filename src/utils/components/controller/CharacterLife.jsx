import { create } from "zustand";

const maximumLife = 2;

// Estado global de vida del personaje
export const useLifeState = create((set) => ({
    // Variables del estado
    title: "Life", // Título del estado 
    value: maximumLife, // Valor actual de vida
  
    // Funciones para modificar el estado de vida
    increment: () => set((state) => ({ value: state.value < maximumLife ? state.value + 1 : state.value })),
    decrement: () => set((state) => ({ value: state.value > 0 ? state.value - 1 : state.value })),
    reset: () => set({ value: maximumLife }),
  }));