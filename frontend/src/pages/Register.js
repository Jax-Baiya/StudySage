// File: src/pages/Register.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Snackbar, IconButton, Tooltip, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { register } from '../utils/api';

function Register() {
  const [username, setUsername] = useState(''); // State to store username input
  const [email, setEmail] = useState(''); // State to store email input
  const [password, setPassword] = useState(''); // State to store password input
  const [error, setError] = useState(''); // State to store error messages
  const [open, setOpen] = useState(false); // State to manage Snackbar visibility
  const [authToken, setAuthToken] = useState(''); // State to store the auth token
  const navigate = useNavigate();

  // Function to handle registration action
  const handleRegister = async () => {
    console.log('Attempting to register with email:', email);
    try {
      // Call register API with provided credentials
      const response = await register({ username, email, password });
      console.log('Registration successful:', response.data);
      
      // Store the token received during registration
      const token = response.data.token;
      setAuthToken(token);
      localStorage.setItem('token', token);
  
      // Navigate to the login page
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      if (error.response) {
        // If the server responded with a status other than 200 range
        console.error('Error response data:', error.response.data);
        setError(`Registration failed: ${error.response.data.message || 'Please check your details and try again.'}`);
      } else if (error.request) {
        // If the request was made but no response was received
        console.error('No response received:', error.request);
        setError('Registration failed: No response from server. Please try again later.');
      } else {
        // If something else happened in setting up the request
        console.error('Error message:', error.message);
        setError('Registration failed: An unexpected error occurred. Please try again.');
      }
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
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {/* Username input field */}
          <TextField
            label="Username"
            value={username}
            onChange={(e) => {
              console.log('Username input changed:', e.target.value);
              setUsername(e.target.value);
            }}
            fullWidth
            margin="normal"
          />
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
          {/* Register button */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
          >
            Register
          </Button>
          {/* Display auth token with copy button if available */}
          {authToken && (
            <div style={{ marginTop: '1rem' }}>
              <Typography id="auth-token" variant="body1">
                Auth Token: {authToken}
              </Typography>
              <Tooltip title="Copy Auth Token">
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText(authToken);
                    console.log('Auth token copied to clipboard');
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
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

export default Register;