// File: src/pages/GenerateFlashcard.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { generateFlashcard, createFlashcard } from '../utils/api'; // Import createFlashcard from api
import { useNavigate } from 'react-router-dom';

function GenerateFlashcard() {
  const [prompt, setPrompt] = useState(''); // State to store the user's prompt
  const [flashcard, setFlashcard] = useState(null); // State to store the generated flashcard
  const [error, setError] = useState(''); // State to store any errors
  const navigate = useNavigate();

  const handleGenerate = async () => {
    try {
      console.log('Generating flashcard with prompt:', prompt);
      const response = await generateFlashcard({ prompt });
      setFlashcard(response.data);
      setError('');
    } catch (error) {
      console.error('Error generating flashcard:', error);
      setError('Failed to generate flashcard. Please try again later.');
    }
  };

  const handleSave = async () => {
    try {
      console.log('Saving generated flashcard:', flashcard);
      await createFlashcard(flashcard);
      setError('');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving flashcard:', error);
      setError('Failed to save flashcard. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Generate Flashcard via AI</Typography>
      {/* Input field for the prompt */}
      <TextField
        label="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        margin="normal"
      />
      {/* Button to trigger flashcard generation */}
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate
      </Button>
      {/* Display error message if any */}
      {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}
      {/* Display generated flashcard if available */}
      {flashcard && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">Generated Flashcard:</Typography>
          <Typography variant="h6">{flashcard.title}</Typography>
          <Typography variant="body1">{flashcard.content}</Typography>
          {/* Button to save the generated flashcard */}
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '1rem' }}>
            Save Flashcard
          </Button>
          {/* Button to navigate back to the dashboard */}
          <Button variant="contained" color="secondary" onClick={() => navigate('/dashboard')} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
            Back to Dashboard
          </Button>
        </div>
      )}
    </Container>
  );
}

export default GenerateFlashcard;