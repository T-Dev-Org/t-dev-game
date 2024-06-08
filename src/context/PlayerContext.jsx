import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto del jugador
const PlayerContext = createContext();

// Crear un hook personalizado para usar el contexto del jugador
export const usePlayer = () => {
    return useContext(PlayerContext);
};

// Crear el proveedor del contexto del jugador
export const PlayerProvider = ({ children }) => {
    const [playerData, setPlayerData] = useState(() => {
        // Cargar los datos del jugador desde LocalStorage al inicio
        const storedPlayerData = localStorage.getItem('playerData');
        return storedPlayerData ? JSON.parse(storedPlayerData) : null;
    });

    // Guardar los datos del jugador en LocalStorage cada vez que cambien
    useEffect(() => {
        if (playerData) {
            localStorage.setItem('playerData', JSON.stringify(playerData));
        }
    }, [playerData]);

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData }}>
            {children}
        </PlayerContext.Provider>
    );
};
