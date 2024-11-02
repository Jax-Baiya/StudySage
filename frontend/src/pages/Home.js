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