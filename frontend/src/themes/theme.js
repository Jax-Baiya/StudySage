// File: frontend/src/themes/theme.js
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
      paper: '#f4f6f8',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

// Catppuccin Themes
export const latteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#babbf1', // Lavender
    },
    secondary: {
      main: '#babbf1', // Lavender
    },
    background: {
      default: '#fafafa', // Rosewater
      paper: '#ffffff',
    },
    text: {
      primary: '#1E1F29',
      secondary: '#3E424E',
    },
  },
});

export const frappeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#96CDFB', // Sky
    },
    secondary: {
      main: '#E891BB', // Red
    },
    background: {
      default: '#303446', // Text Primary
      paper: '#292C3C', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});

export const macchiatoTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c6a0f6', // Mauve
    },
    secondary: {
      main: '#b7bdf8', // Lavender
    },
    background: {
      default: '#24273A', // Base
      paper: '#1E2030', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});

export const mochaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5e0dc', // Rosewater
    },
    secondary: {
      main: '#f2cdcd', // Flamingo
    },
    background: {
      default: '#1e1e2e', // Base
      paper: '#181825', // Surface0
    },
    text: {
      primary: '#BAC2DE',
      secondary: '#A6ADC8',
    },
  },
});
