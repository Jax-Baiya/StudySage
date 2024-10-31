// src/components/FlashcardForm.js
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';
import api from '../services/api';

const FlashcardForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateFlashcard = async () => {
    try {
      const token = localStorage.getItem('token');
      await api.post('/flashcards', { title, content }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Clear input fields after successful creation
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Error creating flashcard:', err);
    }
  };

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          label="Flashcard Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Flashcard Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateFlashcard}
          style={{ marginTop: '1em' }}
        >
          Add Flashcard
        </Button>
      </CardContent>
    </Card>
  );
};

export default FlashcardForm;
