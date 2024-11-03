// File: src/pages/Settings.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';

function Settings() {
  const [apiKey, setApiKey] = useState('');
  const [theme, setTheme] = useState('light');

  const handleSaveSettings = () => {
    console.log('Saving settings:', { apiKey, theme });
    // Save settings logic here
  };

  return (
    <Container>
      <Typography variant="h4">Settings</Typography>
      <TextField
        label="API Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Switch checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />}
        label="Dark Mode"
      />
      <Button variant="contained" color="primary" onClick={handleSaveSettings}>
        Save Settings
      </Button>
    </Container>
  );
}

export default Settings;