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
      main: '#e7e9fb',
    },
    secondary: {
      main: '#f5c2e7',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
});

export const frappeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#96CDFB',
    },
    secondary: {
      main: '#E891BB',
    },
    background: {
      default: '#303446',
      paper: '#292C3C',
    },
  },
});

export const macchiatoTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8aadf4',
    },
    secondary: {
      main: '#f4b8e4',
    },
    background: {
      default: '#24273A',
      paper: '#1E2030',
    },
  },
});

export const mochaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#89b4fa',
    },
    secondary: {
      main: '#f5c2e7',
    },
    background: {
      default: '#1e1e2e',
      paper: '#181825',
    },
  },
});
