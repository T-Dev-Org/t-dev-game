import React, { useState } from 'react';
import './profile.css'


const Profile = () => {
    const [gamesPlayed, setGamesPlayed] = useState(0);
    const [wins, setWins] = useState(0);
    const [losses, setLosses] = useState(0);
    const [draws, setDraws] = useState(0);

    // Función para actualizar las estadísticas después de una partida
    const updateStats = (result) => {
        setGamesPlayed(gamesPlayed + 1);
        if (result === 'win') {
            setWins(wins + 1);
        } else if (result === 'loss') {
            setLosses(losses + 1);
        }
    };

    return (
        <div className="user-profile">
            <h2 className="profile-heading">User Profile</h2>
            <div className="profile-info">
                <p className="username">Username: ejemplo</p>
                <p className="stat">Games Played: {gamesPlayed}</p>
                <p className="stat">Wins: {wins}</p>
                <p className="stat">Losses: {losses}</p>
            </div>
        </div>
    );
};

export default Profile;
