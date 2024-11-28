import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const theme = useTheme(); // Access the active theme
  const token = localStorage.getItem('token'); // Check if user is logged in

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.background.default})`,
        backdropFilter: 'blur(30px)', // Apply global frosted effect
        WebkitBackdropFilter: 'blur(30px)', // Cross-browser frosted effect
      }}
    >
      {/* Background Overlays */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(50px)',
          WebkitBackdropFilter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      {/* Floating Content */}
      <Paper
        elevation={5}
        sx={{
          zIndex: 1,
          padding: '3rem',
          borderRadius: '16px',
          maxWidth: '600px',
          textAlign: 'center',
          backgroundColor:
            theme.palette.mode === 'dark'
              ? 'rgba(30, 30, 46, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          boxShadow: `0px 8px 30px ${
            theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.2)'
          }`,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: '700',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to StudySage
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your ultimate study companion that helps you create, manage, and enhance your learning experience with custom flashcards, AI-generated content, and more.
        </Typography>

        {/* Buttons */}
        <Box mt={4}>
          {!token ? (
            <>
              <Button
                variant="contained"
                onClick={() => navigate('/login')}
                sx={{
                  marginRight: '1rem',
                  padding: '0.7rem 2.5rem',
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                }}
              >
                Log In
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/register')}
                sx={{
                  padding: '0.7rem 2.5rem',
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                Get Started
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => navigate('/dashboard')}
              sx={{
                padding: '0.7rem 2.5rem',
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Go to Dashboard
            </Button>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;
