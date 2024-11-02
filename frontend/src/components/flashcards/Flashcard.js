// File: src/components/flashcards/Flashcard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Flashcard({ question, answer }) {
  console.log('Flashcard component rendered with question:', question);
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        {/* Display the question */}
        <Typography variant="h6">{question}</Typography>
        {/* Display the answer */}
        <Typography variant="body2" color="textSecondary">{answer}</Typography>
      </CardContent>
    </Card>
  );
}

export default Flashcard;