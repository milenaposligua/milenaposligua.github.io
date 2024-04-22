"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext<any>(null);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useSelectedTheme = () => {
  const { selectedTheme, setSelectedTheme } = useThemeContext();

  return { selectedTheme, setSelectedTheme };
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTheme, setSelectedTheme] = useState(() => localStorage.getItem('theme') || 'red');

  useEffect(() => {
    const applyTheme = () => {
      const themeColors: Record<string, Record<string, string>> = {
        red: {
          '--red-accent': '#ff0040',
          '--red-accent-opacity': '#ff004049',
          '--red-intense': '#df0c52',
          '--red-burdeo': '#62162f',
        },
        blue: {
          '--red-accent': '#2196f3',
          '--red-accent-opacity': 'rgba(33, 150, 243, 0.1)',
          '--red-intense': '#0d47a1',
          '--red-burdeo': '#2379ff',
        },
        green: {
          '--red-accent': '#00bf4a',
          '--red-accent-opacity': 'rgba(0, 255, 111, 0.1)',
          '--red-intense': '#00ff9c',
          '--red-burdeo': '#1e2c23',
        },
      };

      const selectedThemeColors = themeColors[selectedTheme];

      Object.entries(selectedThemeColors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    };

    applyTheme();

    localStorage.setItem('theme', selectedTheme);
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
