import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LoginForm from './components/LoginForm';

const theme = createTheme({
  palette: {
    primary: { main: '#3f51b5' },
    secondary: { main: '#f50057' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;
