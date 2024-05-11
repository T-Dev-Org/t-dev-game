import {create} from 'zustand'
import { useLifeState } from './CharacterLife';

const initialDiamonds = 0;
const lifeState = useLifeState.getState();

// Estado global de coleccionables del personaje
export const useCollectablesState = create((set) => ({
    // Variables del estado
    title: "Diamonds", // Título del estado 
    value: initialDiamonds, // Cantidad inicial de diamantes

  
    // Funciones para modificar el estado de los coleccionables
    increment: () => set((state) => {
        const newValue = state.value + 1;
        if (newValue === 10) {
          if (lifeState.value < lifeState.maximumLife) {
            lifeState.increment();
          }
        }
        return { value: newValue };
      }),

    reset: () => set({ value: initialDiamonds }),    
  }));