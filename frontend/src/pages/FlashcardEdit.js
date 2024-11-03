// File: src/pages/FlashcardEdit.js
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, CircularProgress } from '@mui/material';
import { getFlashcards } from '../utils/api';

function FlashcardEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flashcard, setFlashcard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchFlashcard = async () => {
      try {
        console.log(`Fetching flashcard with id: ${id}`);
        const response = await getFlashcards();
        const card = response.data.find((item) => item._id === id);
        if (card) {
          setFlashcard(card);
          setTitle(card.title);
          setContent(card.content);
          console.log('Flashcard fetched successfully:', card);
        } else {
          console.error('Flashcard not found');
        }
      } catch (error) {
        console.error('Error fetching flashcard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcard();
  }, [id]);

  const handleSave = () => {
    console.log(`Saving flashcard with id: ${id}`, { title, content });
    // Here, add the logic to save/update the flashcard
    navigate('/dashboard');
  };

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : flashcard ? (
        <>
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
        </>
      ) : (
        <Typography color="error">Flashcard not found.</Typography>
      )}
    </Container>
  );
}

export default FlashcardEdit;