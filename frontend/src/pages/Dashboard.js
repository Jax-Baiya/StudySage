// File: src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { getFlashcards } from '../utils/api';
import Flashcard from '../components/flashcards/Flashcard';

function Dashboard() {
  useAuth(); // Ensure the user is authenticated before rendering the component
  const [flashcards, setFlashcards] = useState([]); // State to store flashcards data
  const [flashcardsError, setFlashcardsError] = useState(''); // State to store error messages

  useEffect(() => {
    // Function to fetch flashcards data
    const fetchData = async () => {
      console.log('Fetching flashcards');
      try {
        const response = await getFlashcards();
        console.log('Flashcards fetched successfully');
        setFlashcards(response.data); // Update state with fetched flashcards
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setFlashcardsError('Error fetching flashcards. Please try again later.');
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">Welcome to your personalized dashboard!</Typography>
      {/* Display error message if any */}
      {flashcardsError && <Typography color="error">{flashcardsError}</Typography>}
      {/* Render flashcards */}
      {flashcards.map((card) => (
        <Flashcard key={card.id} question={card.question} answer={card.answer} />
      ))}
    </Container>
  );
}

export default Dashboard;