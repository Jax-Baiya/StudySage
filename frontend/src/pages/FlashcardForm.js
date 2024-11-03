// File: frontend/src/pages/FlashcardForm.js
import React, { useState, useEffect } from 'react';
import { createFlashcard, updateFlashcard, getFlashcardById } from '../utils/api';
import { useParams } from 'react-router-dom';

function FlashcardForm({ isEditing }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (isEditing) {
      const fetchFlashcard = async () => {
        try {
          console.log('Fetching flashcard for editing with ID:', id); // Debug log
          const response = await getFlashcardById(id);
          console.log('Fetched flashcard for editing:', response.data); // Debug log
          setTitle(response.data.title);
          setContent(response.data.content);
        } catch (error) {
          console.error('Failed to fetch flashcard:', error);
        }
      };
      fetchFlashcard();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        console.log('Updating flashcard with ID:', id, 'Title:', title, 'Content:', content); // Debug log
        await updateFlashcard(id, { title, content });
        console.log('Flashcard updated successfully');
      } else {
        console.log('Creating new flashcard with Title:', title, 'Content:', content); // Debug log
        await createFlashcard({ title, content });
        console.log('Flashcard created successfully');
      }
    } catch (error) {
      console.error('Failed to save flashcard:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
        required
      ></textarea>
      <button type="submit">{isEditing ? 'Update Flashcard' : 'Create Flashcard'}</button>
    </form>
  );
}

export default FlashcardForm;