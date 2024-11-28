// File: src/pages/Settings.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Settings() {
  const [apiKey, setApiKey] = useState('');

  const handleSaveSettings = () => {
    console.log('Saving settings:', { apiKey });
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
      <Button variant="contained" color="primary" onClick={handleSaveSettings}>
        Save Settings
      </Button>
    </Container>
  );
}

export default Settings;