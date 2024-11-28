import React from 'react';
import ReactDOM from 'react-dom'; // Updated import
import App from './App.jsx'; // Ensured '.jsx' extension
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';
import './index.css';

const container = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeContextProvider>
  </React.StrictMode>,
  container
);