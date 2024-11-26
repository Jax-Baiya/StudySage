import React, { useEffect, useState } from 'react';
import FlashcardForm from '../components/FlashcardForm';
import { getFlashcard, updateFlashcard } from '../services/FlashcardService';

const FlashcardEditPage = ({ match }) => {
  const flashcardId = match.params.id;
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchFlashcard = async () => {
      const data = await getFlashcard(flashcardId);
      setInitialData(data);
    };
    fetchFlashcard();
  }, [flashcardId]);

  const handleSubmit = async (formData) => {
    await updateFlashcard(flashcardId, formData);
    // ...existing code to handle post-update actions...
  };

  return (
    <div>
      <h1>Edit Flashcard</h1>
      {initialData && <FlashcardForm onSubmit={handleSubmit} initialData={initialData} />}
    </div>
  );
};

export default FlashcardEditPage;