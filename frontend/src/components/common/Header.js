// File: src/components/common/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import DarkModeToggle from '../../pages/DarkModeToggle';

// Define styles for the header component
const useStyles = makeStyles({
  headerTitle: {
    flexGrow: 1, // Ensure the title takes up available space
  },
  toggleButton: {
    marginRight: 'auto', // Align the toggle button to the left
  },
});

function Header({ toggleDarkMode, isDarkMode }) {
  const classes = useStyles();
  const navigate = useNavigate();

  console.log('Header component rendered');

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Dark mode toggle button on the left */}
        <div className={classes.toggleButton}>
          <DarkModeToggle toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        </div>
        {/* Application title */}
        <Typography variant="h6" className={classes.headerTitle}>StudySage</Typography>
        {/* Navigation buttons */}
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
        <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
        <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;