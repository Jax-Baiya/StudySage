// File: src/themes/theme.js
import { createTheme } from '@mui/material/styles';

// Define a custom theme for Material-UI components
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color
    },
    secondary: {
      main: '#dc004e', // Secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Define default font family
  },
});

console.log('Theme created');

export default theme;