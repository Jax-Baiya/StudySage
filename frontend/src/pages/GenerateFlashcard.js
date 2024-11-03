import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { generateFlashcard, createFlashcard } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function GenerateFlashcard() {
  const [prompt, setPrompt] = useState('');
  const [flashcard, setFlashcard] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGenerate = async () => {
    try {
      console.log('Generating flashcard with prompt:', prompt);
      const response = await generateFlashcard({ prompt });
      console.log('Generated flashcard response:', response);
      if (response && response.data) {
        setFlashcard({
          ...response.data,
          title: prompt, // Set the title to the prompt explicitly
        });
        setError('');
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error generating flashcard:', error);
      setError('Failed to generate flashcard. Please try again later.');
    }
  };
  
  const handleSave = async () => {
    try {
      if (flashcard) {
        console.log('Saving generated flashcard:', flashcard); // Debug log
        const response = await createFlashcard({
          title: flashcard.title, // Set the title explicitly from the prompt
          content: flashcard.content || 'No content available',
        }); // Save the generated flashcard with a proper structure
        console.log('Save response:', response);
        if (response.status === 201) {
          navigate('/dashboard');
        } else {
          setError('Failed to save flashcard. Please try again later.');
        }
      } else {
        console.error('No flashcard to save');
      }
    } catch (error) {
      console.error('Error saving flashcard:', error);
      setError('Failed to save flashcard. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Generate Flashcard via AI</Typography>
      <TextField
        label="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate Flashcard
      </Button>
      {error && (
        <Typography color="error" style={{ marginTop: '1rem' }}>
          {error}
        </Typography>
      )}
      {flashcard && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">Generated Flashcard:</Typography>
          <Typography variant="h6">{flashcard.title}</Typography>
          <Typography variant="body1">{flashcard.content}</Typography>
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '1rem' }}>
            Save Flashcard
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/dashboard')}
            style={{ marginTop: '1rem', marginLeft: '1rem' }}
          >
            Back to Dashboard
          </Button>
        </div>
      )}
    </Container>
  );
}

export default GenerateFlashcard;
