// File: src/pages/FlashcardDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import { getFlashcardById } from '../utils/api'; // Corrected import to use getFlashcardById
import { useNavigate } from 'react-router-dom';

function FlashcardDetail() {
  const { id } = useParams();
  const [flashcard, setFlashcard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlashcard = async () => {
      try {
        const response = await getFlashcardById(id); // Corrected to use getFlashcardById
        if (response && response.data) {
          setFlashcard(response.data);
        } else {
          throw new Error('Failed to fetch flashcard.');
        }
      } catch (error) {
        console.error('Error fetching flashcard:', error);
      }
    };

    fetchFlashcard();
  }, [id]);

  if (!flashcard) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{flashcard.title}</Typography>
      <ReactMarkdown>{flashcard.content}</ReactMarkdown> {/* Render content with ReactMarkdown */}
      <Button variant="contained" color="primary" onClick={() => navigate(`/flashcard/edit/${id}`)} style={{ marginTop: '1rem' }}>
        Edit Flashcard
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate('/dashboard')}
        style={{ marginTop: '1rem', marginLeft: '1rem' }}
      >
        Back to Dashboard
      </Button>
    </Container>
  );
}

export default FlashcardDetail;
