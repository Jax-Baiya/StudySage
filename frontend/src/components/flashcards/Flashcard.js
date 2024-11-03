// File: src/components/flashcards/Flashcard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Flashcard({ id, question, answer }) {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);

  console.log('Rendering flashcard with question:', question);

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        {showAnswer && <Typography variant="body2" color="textSecondary">{answer}</Typography>}
        <Button size="small" onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </Button>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(`/flashcard/${id}`)}>
          View
        </Button>
        <Button size="small" color="secondary" onClick={() => navigate(`/flashcard/edit/${id}`)}>
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