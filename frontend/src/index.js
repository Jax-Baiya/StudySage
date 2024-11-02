// File: src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme';
import { BrowserRouter as Router } from 'react-router-dom';

// Get the root container element from the DOM
const container = document.getElementById('root');
// Create a root for React 18 concurrent rendering
const root = createRoot(container);
console.log('Rendering root component');
// Render the app inside the root
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);