// File: src/components/common/Header.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { ThemeContext } from '../../contexts/ThemeContext';

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

  console.log('Header component rendered');

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.headerTitle}>StudySage</Typography>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
        <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>
        <Button color="inherit" onClick={() => navigate('/dashboard')}>Dashboard</Button>
        <div className={classes.toggleButton}>
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
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
