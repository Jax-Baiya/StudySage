// File: src/pages/Home.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Removed unused 'ThemeContext' import

function Home() {
  // Removed unused 'currentTheme' variable
  const navigate = useNavigate();

  return (
    <div>
      <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center', minHeight: '80vh' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to StudySage
        </Typography>
        <Typography variant="h7" prop>
          Your ultimate study companion that helps you create, manage, and enhance your learning experience with custom flashcards, AI-generated content, and more.
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          gap={3}
          marginTop="2rem"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/register')}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
