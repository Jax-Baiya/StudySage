// File: src/pages/Settings.js
import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';

function Settings() {
  const [apiKey, setApiKey] = useState('');
  const { isGlassmorphic, toggleGlassmorphism } = useContext(ThemeContext);

  const handleSaveSettings = () => {
    console.log('Saving settings:', { apiKey });
    // Save settings logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <TextField
        label="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            checked={isGlassmorphic}
            onChange={toggleGlassmorphism}
            name="glassmorphismToggle"
            color="primary"
          />
        }
        label="Enable Glassmorphism"
      />
      <Button variant="contained" color="primary" onClick={handleSaveSettings}>
        Save Settings
      </Button>
    </Container>
  );
}

export default Settings;