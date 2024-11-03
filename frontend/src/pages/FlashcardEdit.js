// File: src/pages/FlashcardEdit.js
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, CircularProgress } from '@mui/material';
import { getFlashcardById, updateFlashcard } from '../utils/api';

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
        const response = await getFlashcardById(id);
        if (response.data) {
          setFlashcard(response.data);
          setTitle(response.data.title);
          setContent(response.data.content);
          console.log('Flashcard fetched successfully:', response.data);
        } else {
          setFlashcard(null);
        }
      } catch (error) {
        console.error('Error fetching flashcard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcard();
  }, [id]);

  const handleSave = async () => {
    try {
      console.log(`Saving flashcard with id: ${id}`, { title, content });
      await updateFlashcard(id, { title, content });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving flashcard:', error);
    }
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