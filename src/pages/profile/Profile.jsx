import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './profile.css';
import { usePlayer } from '../../context/PlayerContext';
import useGameStore from '../../utils/components/controller/CharacterStatsState';

const Profile = () => {
  const {playerData} = usePlayer();
  const { losses, enemiesDefeated, livesCollected } = useGameStore();
  const data = [
    { name: 'Losses', value: losses },
    { name: 'Diamonds Collected', value: playerData.diamantes },
    { name: 'Enemies Defeated', value: enemiesDefeated },
    { name: 'Lives Collected', value: livesCollected },
  ];

  return (
    <div className="statistics-page">
      <div className='statistics-title'>
        <h1>Game Statistics</h1>
        <h2>{playerData.displayName}</h2>
      </div>
      <div className="statistics-container">
        <BarChart width={600} height={400} data={data} >
          <CartesianGrid strokeDasharray="3 3" stroke='#33FFA5 ' />
          <XAxis dataKey="name" tick={{
            fill: '#e5e6c9', 
            fontSize: 14,
            fontWeight: 'bold'
          }} />
          <YAxis tick={{
            fill: '#e5e6c9',
            fontSize: 12,
            fontWeight: 'bold',
            textAnchor: 'end',
          }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#33A2FF" />
        </BarChart>
      </div>
    </div>
  );
};

export default Profile;
