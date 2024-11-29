// File: frontend/src/contexts/ThemeContext.jsx
import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material'; // Corrected import
import { generateTheme } from '../themes/theme'; // Updated import

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [themeName, setThemeName] = useState('mocha'); // Default theme
  const [isGlassmorphic, setIsGlassmorphic] = useState(false); // Enable/disable glassmorphism

  const theme = useMemo(
    () => generateTheme(themeName, isGlassmorphic),
    [themeName, isGlassmorphic]
  );

  const switchTheme = (name) => {
    setThemeName(name);
  };

  const toggleGlassmorphism = () => {
    setIsGlassmorphic((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, themeName, isGlassmorphic, toggleGlassmorphism }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Ensure baseline styles are applied */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
