/*
 * StudySage Frontend Code Overview
 * Technologies: React.js, Material-UI
 * This document provides the full code for the StudySage frontend, structured as requested.
 */

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

// File: src/App.js
import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/common/Header';

// Lazy load the Dashboard component for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  console.log('App component rendered');
  return (
    <>
      {/* Render the header component */}
      <Header />
      {/* Use Suspense to show a fallback while loading the Dashboard component */}
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

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

// File: src/pages/Home.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  console.log('Home component rendered');

  return (
    <Container>
      {/* Welcome message */}
      <Typography variant="h3" gutterBottom>Welcome to StudySage</Typography>
      {/* Button to navigate to the login page */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('Navigating to login page');
          navigate('/login');
        }}
      >
        Login
      </Button>
    </Container>
  );
}

export default Home;

// File: src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/api';

function Login() {
  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [error, setError] = useState(''); // State to store error messages
  const [open, setOpen] = useState(false); // State to manage Snackbar visibility
  const navigate = useNavigate();

  // Function to handle login action
  const handleLogin = async () => {
    console.log('Attempting to log in with email:', email);
    try {
      // Call login API with provided credentials
      const response = await login({ email, password });
      console.log('Login successful, token received');
      // Store the token and navigate to the dashboard
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid credentials');
      setOpen(true); // Show error message using Snackbar
    }
  };

  // Function to close the Snackbar
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      {/* Email input field */}
      <TextField
        label="Email"
        value={email}
        onChange={(e) => {
          console.log('Email input changed:', e.target.value);
          setEmail(e.target.value);
        }}
        fullWidth
        margin="normal"
      />
      {/* Password input field */}
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => {
          console.log('Password input changed');
          setPassword(e.target.value);
        }}
        fullWidth
        margin="normal"
      />
      {/* Login button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
      {/* Snackbar to show error messages */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
      />
    </Container>
  );
}

export default Login;

// File: src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { getFlashcards } from '../utils/api';
import Flashcard from '../components/flashcards/Flashcard';

function Dashboard() {
  useAuth(); // Ensure the user is authenticated before rendering the component
  const [flashcards, setFlashcards] = useState([]); // State to store flashcards data
  const [flashcardsError, setFlashcardsError] = useState(''); // State to store error messages

  useEffect(() => {
    // Function to fetch flashcards data
    const fetchData = async () => {
      console.log('Fetching flashcards');
      try {
        const response = await getFlashcards();
        console.log('Flashcards fetched successfully');
        setFlashcards(response.data); // Update state with fetched flashcards
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setFlashcardsError('Error fetching flashcards. Please try again later.');
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">Welcome to your personalized dashboard!</Typography>
      {/* Display error message if any */}
      {flashcardsError && <Typography color="error">{flashcardsError}</Typography>}
      {/* Render flashcards */}
      {flashcards.map((card) => (
        <Flashcard key={card.id} question={card.question} answer={card.answer} />
      ))}
    </Container>
  );
}

export default Dashboard;

// File: src/components/common/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

// Define styles for the header component
const useStyles = makeStyles({
  headerTitle: {
    flexGrow: 1, // Ensure the title takes up available space
  },
});

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  console.log('Header component rendered');

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Application title */}
        <Typography variant="h6" className={classes.headerTitle}>StudySage</Typography>
        {/* Navigation buttons */}
        <Button color="inherit" onClick={() => {
          console.log('Navigating to home page');
          navigate('/');
        }}>Home</Button>
        <Button color="inherit" onClick={() => {
          console.log('Navigating to login page');
          navigate('/login');
        }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

// File: src/components/common/Footer.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  console.log('Footer component rendered');
  return (
    <Container style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="body2">&copy; 2024 StudySage. All rights reserved.</Typography>
    </Container>
  );
}

export default Footer;

// File: src/components/ai/AIComponent.js
import React from 'react';
import { Container, Typography } from '@mui/material';

function AIComponent() {
  console.log('AIComponent rendered');
  return (
    <Container>
      <Typography variant="h4">AI Component</Typography>
      <Typography variant="body1">This component will handle AI-related functionalities.</Typography>
    </Container>
  );
}

export default AIComponent;

// File: src/components/flashcards/Flashcard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Flashcard({ question, answer }) {
  console.log('Flashcard component rendered with question:', question);
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        {/* Display the question */}
        <Typography variant="h6">{question}</Typography>
        {/* Display the answer */}
        <Typography variant="body2" color="textSecondary">{answer}</Typography>
      </CardContent>
    </Card>
  );
}

export default Flashcard;

// File: src/hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated by verifying the token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirecting to login page');
      navigate('/login'); // Redirect to login page if not authenticated
    }
  }, [navigate]);
}

export default useAuth;

// File: src/utils/api.js
import axios from 'axios';

// Create an axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for the API
});

// Add a request interceptor to include the authorization token in the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log('Attaching token to request headers');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to call the login API endpoint
export const login = (credentials) => {
  console.log('API call to /auth/login with credentials:', credentials);
  return api.post('/auth/login', credentials);
};

// Function to call the flashcards API endpoint
export const getFlashcards = () => {
  console.log('API call to /flashcards');
  return api.get('/flashcards');
};

export default api;
