// File: frontend/src/contexts/ThemeContext.js
import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { latteTheme, frappeTheme, macchiatoTheme, mochaTheme } from '../themes/theme';

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState('latte');

  const theme = useMemo(() => {
    switch (themeName) {
      case 'latte':
        return latteTheme;
      case 'frappe':
        return frappeTheme;
      case 'macchiato':
        return macchiatoTheme;
      case 'mocha':
        return mochaTheme;
      default:
        return latteTheme;
    }
  }, [themeName]);

  const switchTheme = (name) => {
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
