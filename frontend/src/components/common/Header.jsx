// File: src/components/common/Header.jsx
import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Select, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate, Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { logout } from '../../utils/api';
import { ReactComponent as LogoLightSvg } from '../../assets/logos/StudySage_light_bg.svg';
import { ReactComponent as LogoDarkSvg } from '../../assets/logos/StudySage_dark_bg.svg';
import { useTheme } from '@mui/material/styles'; // Added

function Header() {
  const navigate = useNavigate();
  const { switchTheme, themeName, isGlassmorphic, toggleGlassmorphism } = useContext(ThemeContext); // Added glassmorphic controls
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

  const isCatpuccinTheme = themeName === 'catpuccin'; // Defined isCatpuccinTheme

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: isGlassmorphic ? 'blur(20px)' : 'none', // Frosted effect when glassmorphic
        WebkitBackdropFilter: isGlassmorphic ? 'blur(20px)' : 'none',
        backgroundColor: isGlassmorphic
          ? 'rgba(255, 255, 255, 0.1)' // Semi-transparent for glassmorphic effect
          : theme.palette.background.paper, // Default background based on theme
        color: isCatpuccinTheme
          ? theme.palette.catpuccin.text.primary
          : theme.palette.text.primary,
        boxShadow: isGlassmorphic ? 'none' : undefined, // Remove shadow for a clean look when glassmorphic
        padding: '8px 0',
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ minHeight: '56px' }}> {/* Adjusted minHeight */}
        <Link to="/">
          {logoMap[theme.palette.mode] || <LogoDarkSvg style={{ width: '40px', height: '40px' }} />}
        </Link>

        <Typography variant="h6" sx={{ flexGrow: 1 }}> {/* Replaced className with sx */}
          StudySage
        </Typography>
        <Button color="inherit" onClick={() => navigate('/')}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate('/dashboard')}>
          Dashboard
        </Button>
        <Select
          value={themeName}
          onChange={(e) => switchTheme(e.target.value)}
          sx={{ color: 'white', marginLeft: 2 }} // Replaced className with sx
        >
          <MenuItem value="glassmorphic">Glassmorphic</MenuItem>
          <MenuItem value="latte">Latte</MenuItem>
          <MenuItem value="frappe">Frappe</MenuItem>
          <MenuItem value="macchiato">Macchiato</MenuItem>
          <MenuItem value="mocha">Mocha</MenuItem>
        </Select>
        {/* Glassmorphism Toggle */}
        <Button color="inherit" onClick={toggleGlassmorphism} sx={{ marginLeft: 2 }}>
          {isGlassmorphic ? 'Disable Glass' : 'Enable Glass'}
        </Button>
        <Box sx={{ marginLeft: 'auto' }}> {/* Replaced className with sx */}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

// If ESLint still warns about 'toggleGlassmorphism' being unused, ensure that the Button component is not conditionally rendered
// and that there are no typos in the function name. You can also disable the specific ESLint rule for this line if you're certain it's used correctly.