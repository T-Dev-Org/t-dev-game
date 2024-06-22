import { create } from 'zustand';
import { useLifeState } from './CharacterLife';
import { readUSer } from '../../db/users-collection';

const createCollectablesState = (initialDiamonds) => create((set) => ({
  title: 'Diamonds',
  value: initialDiamonds,

  increment: () => set((state) => {
    const newValue = state.value + 1;
    if (newValue % 10 === 0) {
      const lifeState = useLifeState.getState();
      if (lifeState.value < lifeState.maximumLife) {
        lifeState.increment();
      }
    }
    return { value: newValue };
  }),

  reset: () => set({ value: initialDiamonds }),
}));

const fetchInitialDiamonds = async (email) => {
  try {
    const result = await readUSer(email);
    if (result.success) {
      return result.data.diamantes;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error al cargar los diamantes iniciales:', error);
    return 0;
  }
};

export const useCollectablesState = createCollectablesState(0); 

export const initializeCollectablesState = async (email) => {
  const initialDiamonds = await fetchInitialDiamonds(email);
  useCollectablesState.setState({ value: initialDiamonds });
};
