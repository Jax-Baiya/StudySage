// File: src/components/flashcards/Flashcard.js
import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Flashcard({ id, question, answer }) {
  const navigate = useNavigate();

  console.log('Rendering flashcard with question:', question);

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        <Typography variant="body2" color="textSecondary">{answer}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(`/flashcard/${id}`)}>
          View
        </Button>
        <Button size="small" color="secondary" onClick={() => console.log(`Edit flashcard with id: ${id}`)}>
          Edit
        </Button>
        <Button size="small" color="error" onClick={() => console.log(`Delete flashcard with id: ${id}`)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Flashcard;