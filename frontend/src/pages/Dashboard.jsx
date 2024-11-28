// File: src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import Flashcard from '../components/flashcards/Flashcard';
import { getFlashcards } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        console.log('Fetching flashcards...');  // Debug log
        const response = await getFlashcards();
        console.log('Flashcards fetched successfully:', response);
        setFlashcards(response);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setError(error.message || 'Failed to fetch flashcards. Please check your connection or log in again.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body2">Welcome to your personalized dashboard!</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/flashcard/create')}>
        Add New Flashcard
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/generate-flashcard')} style={{ marginLeft: '1rem' }}>
        AI Generate Flashcard
      </Button>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        flashcards.map((card) => (
          <Flashcard key={card._id} id={card._id} question={card.title} answer={card.content} />
        ))
      )}
    </Container>
  );
}

export default Dashboard;
