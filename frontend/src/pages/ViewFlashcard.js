import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

function ViewFlashcard() {
    const { id } = useParams(); // Get the flashcard ID from the URL
    const [flashcard, setFlashcard] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlashcard = async () => {
            try {
                const response = await axios.get(`/api/flashcards/${id}`);
                setFlashcard(response.data);
                setError('');
            } catch (err) {
                console.error('Error fetching flashcard:', err);
                setError('Failed to fetch flashcard.');
            }
        };

        fetchFlashcard();
    }, [id]);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!flashcard) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4">{flashcard.title}</Typography>
            {/* Render Markdown content using ReactMarkdown */}
            <ReactMarkdown>{flashcard.content}</ReactMarkdown>
            <Button variant="contained" color="primary" onClick={() => navigate(`/flashcard/edit/${id}`)}>Edit Flashcard</Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/dashboard')} style={{ marginLeft: '1rem' }}>Back to Dashboard</Button>
        </Container>
    );
}

export default ViewFlashcard;