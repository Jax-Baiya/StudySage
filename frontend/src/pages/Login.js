// File: src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Snackbar, Box, Paper } from '@mui/material';
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
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom align="center">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
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