import create from 'zustand';

const useGameStore = create((set) => ({
    losses: 0,
    incrementLosses: () => set((state) => ({ losses: state.losses + 1 })),
    enemiesDefeated: 0,
    incrementEnemiesDefeated: () => set((state) => ({ enemiesDefeated: state.enemiesDefeated + 1 })),
    livesCollected: 0,
    incrementLivesCollected: () => set((state) => ({ livesCollected: state.livesCollected + 1 })),
}));

export default useGameStore;
