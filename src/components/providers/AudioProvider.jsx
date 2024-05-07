// [AudioProvider.jsx]
import React, { createContext, useState, useContext, useEffect } from 'react';

const MusicContext = createContext();

const initialState = {
  songs: {
    mainTheme: '/assets/sounds/music/loop_standard.ogg',
    technoTheme1: '/assets/sounds/music/loop_techno_1.ogg',
    technoTheme2: '/assets/sounds/music/loop_techno_2.ogg',
    mysteryTheme: '/assets/sounds/music/loop_mystery.ogg',
    guitarTheme: '/assets/sounds/music/loop_guitar.ogg',
    endingTheme: '/assets/sounds/music/loop_guitar.ogg',
  },
  soundEffects: {
    diamondCollect: '/assets/sounds/collectables/DiamondCollected.wav',
  },
};

export const AudioProvider = ({ children }) => {

  const [sounds, setSounds] = useState(initialState);

  const [currentSong, setCurrentSong] = useState(null);
  const [activeSoundEffects, setActiveSoundEffects] = useState([]);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const activeSounds = JSON.parse(localStorage.getItem('activeSounds')) || [];
    setActiveSoundEffects(activeSounds);
  }, []);

  const handlePlayMusic = (songKey) => {
    if (currentSong !== songKey) {
      if (currentSong) {
        sounds.songs[currentSong].pause();
      }
      setCurrentSong(songKey);
      const audio = new Audio(sounds.songs[songKey]);
      audio.loop = true;
      audio.play();
    }
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
    Object.values(sounds.songs).forEach(sound => {
      sound.pause();
    });
    setActiveSoundEffects([]);
    setCurrentSong(null);
    localStorage.removeItem('activeSounds');
  };

  const mute = () => {
    setIsPlaying(false);
    stopAllSounds();
  };

  const unmute = () => {
    setIsPlaying(true);
    handlePlayMusic(currentSong);
    activeSoundEffects.forEach(soundKey => {
      playSoundEffect(soundKey);
    });
  };

  const values = {
    isPlaying,
    handlePlayMusic,
    playSoundEffect,
    pauseSound,
    mute,
    unmute,
  };

  return (
    <MusicContext.Provider value={values}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error('useMusic debe ser utilizado dentro de un MusicProvider');
  }

  return context;
};
