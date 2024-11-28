// File: src/components/common/Header.jsx
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Select } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate, Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { logout } from '../../utils/api';
import { ReactComponent as LogoLightSvg } from '../../assets/logos/StudySage_light_bg.svg';
import { ReactComponent as LogoDarkSvg } from '../../assets/logos/StudySage_dark_bg.svg';
import { useTheme } from '@mui/material/styles'; // Added

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
  const { switchTheme } = useContext(ThemeContext); // Removed themeName
  const theme = useTheme(); // Added
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

  const logoMap = {
    light: <LogoDarkSvg style={{ width: '40px', height: '40px' }} />, // Use dark logo in light mode
    dark: <LogoLightSvg style={{ width: '40px', height: '40px' }} />,   // Use light logo in dark mode
  };

  return (
    <AppBar
      position="fixed"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '8px 0', // Changed from '0.5rem 0' to '8px 0'
      }}
    >
      <Toolbar style={{ minHeight: '56px' }}> {/* Adjusted minHeight */}
        <Link to="/">
          {logoMap[theme.palette.mode] || <LogoDarkSvg style={{ width: '40px', height: '40px' }} />}
        </Link>

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
          defaultValue="latte"
          onChange={(e) => switchTheme(e.target.value)}
          style={{ color: 'white' }}
        >
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
