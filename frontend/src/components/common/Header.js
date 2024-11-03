// File: src/components/common/Header.js
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Select } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { logout } from '../../utils/api';

const useStyles = makeStyles({
  headerTitle: {
    flexGrow: 1,
  },
  toggleButton: {
    marginRight: 'auto',
  },
});

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const token = localStorage.getItem('token');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token'); // Remove the token from local storage after successful logout
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.headerTitle}>
          StudySage
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/dashboard')}>
          Dashboard
        </Button>
        <Select
          value={currentTheme}
          onChange={(e) => toggleTheme(e.target.value)}
          variant="outlined"
          style={{ color: 'white', backgroundColor: 'inherit' }}
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
          <MenuItem value="latte">Latte</MenuItem>
          <MenuItem value="frappe">Frappe</MenuItem>
          <MenuItem value="macchiato">Macchiato</MenuItem>
          <MenuItem value="mocha">Mocha</MenuItem>
        </Select>
        <div className={classes.toggleButton}>
          <IconButton color="inherit" onClick={handleSettingsClick}>
            <SettingsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleSettingsClose}
          >
            <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
            {!token ? (
              <>
                <MenuItem onClick={() => navigate('/login')}>Sign In</MenuItem>
                <MenuItem onClick={() => navigate('/register')}>Sign Up</MenuItem>
              </>
            ) : (
              <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
