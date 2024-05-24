import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto del jugador
const PlayerContext = createContext();

// Hook personalizado para acceder al contexto del jugador
export const usePlayer = () => {
    return useContext(PlayerContext);
};

// Proveedor del contexto del jugador
export const PlayerProvider = ({ children }) => {
    // Estado para almacenar los datos del jugador
    const [playerData, setPlayerData] = useState(null);

    return (
        <PlayerContext.Provider value={{ playerData, setPlayerData }}>
            {children}
        </PlayerContext.Provider>
    );
};
