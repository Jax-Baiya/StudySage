// File: frontend/src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  lightTheme,
  darkTheme,
  latteTheme,
  frappeTheme,
  macchiatoTheme,
  mochaTheme,
} from '../themes/theme';

export const ThemeContext = createContext();

const themes = {
  light: lightTheme,
  dark: darkTheme,
  latte: latteTheme,
  frappe: frappeTheme,
  macchiato: macchiatoTheme,
  mocha: mochaTheme,
};

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
  }, []);

  const toggleTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes[currentTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
