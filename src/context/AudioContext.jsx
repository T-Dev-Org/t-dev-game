// [AudioContext.jsx]
import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

const AudioContext = createContext();

const initialState = {
  songs: {
    mainTheme: '/assets/sounds/music/loop_standard.ogg',
    technoTheme1: '/assets/sounds/music/loop_techno_1.ogg',
    technoTheme2: '/assets/sounds/music/loop_techno_2.ogg',
    mysteryTheme: '/assets/sounds/music/loop_mystery.ogg',
    guitarTheme: '/assets/sounds/music/loop_guitar.ogg',
    endingTheme: '/assets/sounds/music/ending.ogg',
  },
  soundEffects: {
    diamondCollect: '/assets/sounds/collectables/DiamondCollected.wav',
    ctmSound: '/assets/sounds/catActions/ctm.wav',
    damage: '/assets/sounds/catActions/Damage.wav',
    heal: '/assets/sounds/catActions/Heal.wav'
  },
};

export const AudioProvider = ({ children }) => {

  const [sounds, setSounds] = useState(initialState);

  const [currentSong, setCurrentSong] = useState(null);
  const [activeSoundEffects, setActiveSoundEffects] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);
  const fadeDuration = 1000;

  useEffect(() => {
    const activeSounds = JSON.parse(localStorage.getItem('activeSounds')) || [];
    setActiveSoundEffects(activeSounds);
  }, []);

  const handlePlayMusic = (songKey) => {
    if (currentSong !== songKey) {
      if (currentAudio) {
        fadeOutCurrentSong();
      }
      const audio = new Audio(sounds.songs[songKey]);
      audio.loop = true;
      audio.volume = 0; // Comenzamos con volumen cero
      audio.play().then(() => {
        fadeInNewSong(audio);
        setCurrentAudio(audio);
        setCurrentSong(songKey);
      }).catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  };

  const fadeOutCurrentSong = () => {
    if (!currentAudio) return;
    let volume = currentAudio.volume;
    const fadeStep = volume / (fadeDuration / 100);
    const fadeOutInterval = setInterval(() => {
      volume -= fadeStep;
      // Asegurar que el volumen mínimo sea 0
      volume = Math.max(volume, 0);
      currentAudio.volume = volume;
      if (volume <= 0) {
        currentAudio.pause();
        clearInterval(fadeOutInterval);
      }
    }, 100);
  };

  const fadeInNewSong = (audio) => {
    let volume = 0;
    const fadeStep = 1 / (fadeDuration / 100);
    const fadeInInterval = setInterval(() => {
      volume += fadeStep;
      // Asegurar que el volumen máximo sea 1
      volume = Math.min(volume, 1);
      audio.volume = volume;
      if (volume >= 1) {
        clearInterval(fadeInInterval);
      }
    }, 100);
  };


  const playSoundEffect = (soundKey) => {
    const audio = new Audio(sounds.soundEffects[soundKey]);
    audio.play();
    setActiveSoundEffects(prevState => [...prevState, soundKey]);
    localStorage.setItem('activeSounds', JSON.stringify([...activeSoundEffects, soundKey]));
  };

  const pauseSound = (soundKey) => {
    if (sounds.songs[soundKey]) {
      sounds.songs[soundKey].pause();
    }
  };

  const stopAllSounds = () => {
    if (currentAudio) {
      currentAudio.pause();
    }
    setActiveSoundEffects([]);
    setCurrentSong(null);
    setCurrentAudio(null);
    localStorage.removeItem('activeSounds');
  };

  const mute = () => {
    stopAllSounds();
  };

  const unmute = () => {
    if (currentSong) {
      handlePlayMusic(currentSong);
    }
    activeSoundEffects.forEach(soundKey => {
      playSoundEffect(soundKey);
    });
  };

  const values = {
    handlePlayMusic,
    playSoundEffect,
    pauseSound,
    mute,
    unmute,
  };

  return (
    <AudioContext.Provider value={values}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error('useAudio debe ser utilizado dentro de un AudioProvider');
  }

  return context;
};
