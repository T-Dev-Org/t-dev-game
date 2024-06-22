import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del jugador
const PlayerContext = createContext();

// Crear un hook personalizado para usar el contexto del jugador
export const usePlayer = () => {
    return useContext(PlayerContext);
};

// Crear el proveedor del contexto del jugador
export const PlayerProvider = ({ children }) => {
    const [playerData, setPlayerData] = useState(null);

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData }}>
            {children}
        </PlayerContext.Provider>
    );
};
