// File: src/pages/Home.js
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to StudySage
      </Typography>
      <Typography variant="h7" paragraph>
        Your ultimate study companion that helps you create, manage, and enhance your learning experience with custom flashcards, AI-generated content, and more.
      </Typography>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/register')}
          >
            Get Started
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/login')}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
