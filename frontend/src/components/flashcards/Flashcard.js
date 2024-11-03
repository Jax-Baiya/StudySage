// File: src/components/flashcards/Flashcard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteFlashcard } from '../../utils/api';
import ReactMarkdown from 'react-markdown';

function Flashcard({ id, question, answer }) {
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);

  console.log('Rendering flashcard with question:', question);

  const handleDelete = async () => {
    try {
      console.log(`Deleting flashcard with id: ${id}`);
      await deleteFlashcard(id);
      window.location.reload(); // Reload page to reflect deletion
    } catch (error) {
      console.error('Error deleting flashcard:', error);
    }
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h6">{question}</Typography>
        {showAnswer && (
          <Typography variant="body2" color="textSecondary">
            <ReactMarkdown>{answer}</ReactMarkdown>
          </Typography>
        )}
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
        <Button size="small" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Flashcard;