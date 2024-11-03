// File: frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);
console.log('Rendering root component');

function Root() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  );
}

root.render(<Root />);
