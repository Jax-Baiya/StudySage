// File: src/pages/FlashcardCreate.js
import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createFlashcard } from '../utils/api';

function FlashcardCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = async () => {
    try {
      console.log('Creating new flashcard:', { title, content });
      await createFlashcard({ title, content });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating flashcard:', error);
    }
  };

  return (
    <Container>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        margin="normal"
        multiline
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Button variant="contained" onClick={() => navigate('/dashboard')} style={{ marginLeft: '1rem' }}>
        Cancel
      </Button>
    </Container>
  );
}

export default FlashcardCreate;