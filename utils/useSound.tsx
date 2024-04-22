"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';

const SoundContext = createContext<any>(null);

export const useSoundContext = () => {
  return useContext(SoundContext);
};

export const SoundProvider = ({ children }: { children: React.ReactNode}) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundReady, setSoundReady] = useState(false);
  const [soundFile, setSoundFile] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const audio = new Audio('/Hover.mp3');
      audio.addEventListener('canplaythrough', () => {
        setSoundReady(true);
      });
      setSoundFile(prevSoundFile => {
        if (prevSoundFile) {
          prevSoundFile.removeEventListener('canplaythrough', () => {
            setSoundReady(false);
          });
        }
        return audio;
      });
    }

    return () => {
      if (soundFile) {
        soundFile.removeEventListener('canplaythrough', () => {
          setSoundReady(false);
        });
      }
    };
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const playSoundOnHover = () => {
    if (typeof window !== 'undefined' && window.localStorage && soundEnabled && soundReady && soundFile) {
      soundFile.play();
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playSoundOnHover }}>
      {children}
    </SoundContext.Provider>
  );
};
