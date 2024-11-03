// File: src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import Flashcard from '../components/flashcards/Flashcard';
import { getFlashcards } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [flashcards, setFlashcards] = useState([]); // State to store flashcards
  const [loading, setLoading] = useState(true); // State to handle loading indicator
  const [error, setError] = useState(''); // State to store any errors
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch flashcards when the component mounts
    const fetchFlashcards = async () => {
      try {
        console.log('Fetching flashcards');
        const response = await getFlashcards();
        console.log('Flashcards fetched successfully:', response.data);
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setError('Failed to fetch flashcards. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []);

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">Welcome to your personalized dashboard!</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate('/flashcard/create')}>
        Add New Flashcard
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