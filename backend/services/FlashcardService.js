// ...existing code...

export const createFlashcard = async (flashcardData) => {
  const formData = new FormData();
  formData.append('question', flashcardData.question);
  formData.append('answer', flashcardData.answer);
  formData.append('tags', flashcardData.tags);
  formData.append('category', flashcardData.category);
  if (flashcardData.image) {
    formData.append('image', flashcardData.image);
  }
  // ...existing code to append other flashcard data...

  const response = await fetch('/api/flashcards', {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  // ...existing code...
};