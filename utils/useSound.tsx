"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import {Howl, Howler} from 'howler';

const SoundContext = createContext<any>(null);

export const useSoundContext = () => {
  return useContext(SoundContext);
};

export const SoundProvider = ({ children }: { children: React.ReactNode}) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundReady, setSoundReady] = useState(false);
  const soundFile = new Audio('/Hover.mp3');

  useEffect(() => {
    soundFile.addEventListener('canplaythrough', () => {
      setSoundReady(true);
    });

    return () => {
      soundFile.removeEventListener('canplaythrough', () => {
        setSoundReady(false);
      });
    };
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };



  const playSoundOnHover = () => {
    if (soundEnabled && soundReady) {
      soundFile.play();
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSoundOnHover }}>
      {children}
    </SoundContext.Provider>
  );
};