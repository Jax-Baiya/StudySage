// File: src/pages/FlashcardDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import { getFlashcards } from '../utils/api';

function FlashcardDetail() {
  const { id } = useParams(); // Get flashcard ID from URL
  const navigate = useNavigate();
  const [flashcard, setFlashcard] = useState(null); // State to store the flashcard details
  const [loading, setLoading] = useState(true); // State to handle loading indicator
  const [error, setError] = useState(''); // State to store any errors

  useEffect(() => {
    // Fetch the specific flashcard by ID
    const fetchFlashcard = async () => {
      try {
        console.log(`Fetching flashcard with id: ${id}`);
        const response = await getFlashcards(); // Assuming this endpoint fetches all flashcards
        const card = response.data.find((item) => item._id === id);
        if (card) {
          setFlashcard(card);
          console.log('Flashcard fetched successfully:', card);
        } else {
          setError('Flashcard not found.');
        }
      } catch (error) {
        console.error('Error fetching flashcard:', error);
        setError('Failed to fetch flashcard. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcard();
  }, [id]);

  return (
    <Container>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        flashcard && (
          <>
            <Typography variant="h4">{flashcard.title}</Typography>
            <Typography variant="body1">{flashcard.content}</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate(`/flashcard/edit/${id}`)}>
              Edit Flashcard
            </Button>
            <Button variant="contained" onClick={() => navigate('/dashboard')} style={{ marginLeft: '1rem' }}>
              Back to Dashboard
            </Button>
          </>
        )
      )}
    </Container>
  );
}

export default FlashcardDetail;