// ===== frontend/src/components/FlashcardDisplay.js =====
import React, { useEffect, useState } from 'react';
import { getFlashcards } from '../services/api';
import { toast } from 'react-toastify';
import LoadingSpinner from './LoadingSpinner';

function FlashcardDisplay() {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const data = await getFlashcards();
        setFlashcards(data);
      } catch (error) {
        toast.error('Error fetching flashcards.');
      } finally {
        setLoading(false);
      }
    };
    fetchFlashcards();
  }, []);

  return (
    <div>
      <h2>Flashcards</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        flashcards.length > 0 ? (
          flashcards.map((flashcard) => (
            <div key={flashcard._id}>
              <h3>{flashcard.title}</h3>
              <p>{flashcard.content}</p>
            </div>
          ))
        ) : (
          <p>No flashcards available.</p>
        )
      )}
    </div>
  );
}

export default FlashcardDisplay;
