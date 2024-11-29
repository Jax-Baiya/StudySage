import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ThemeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeContextProvider>,
  document.getElementById('root')
);
