import React from 'react';
import FlashcardForm from '../components/FlashcardForm';
import { createFlashcard } from '../services/FlashcardService';

const FlashcardCreatePage = () => {
  const handleSubmit = async (formData) => {
    await createFlashcard(formData);
    // ...existing code to handle post-creation actions...
  };

  return (
    <div>
      <h1>Create Flashcard</h1>
      <FlashcardForm onSubmit={handleSubmit} />
    </div>
  );
};

export default FlashcardCreatePage;