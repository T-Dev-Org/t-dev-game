import { create } from "zustand";

const maximumLife = 100;
const standardLife = 3

// Estado global de vida del personaje
export const useLifeState = create((set) => ({
    // Variables del estado
    title: "Life", // Título del estado 
    value: standardLife, // Valor actual de vida
    isFalling: false, // Nuevo atributo booleano 'isFalling'    

  
    // Funciones para modificar el estado de vida
    increment: () => set((state) => ({ value: state.value < maximumLife ? state.value + 1 : state.value })),
    decrement: () => set((state) => ({ value: state.value > 0 ? state.value - 1 : state.value })),
    reset: () => set({ value: standardLife }),
    toggleFalling: () => set((state) => ({ isFalling: !state.isFalling })), // Función para cambiar el valor de 'isFalling'    
  }));