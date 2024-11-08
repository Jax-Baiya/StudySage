import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';

const FlashcardForm = ({ onSubmit, initialData = {} }) => {
  const [question, setQuestion] = useState(initialData.question || '');
  const [answer, setAnswer] = useState(initialData.answer || '');
  const [tags, setTags] = useState(initialData.tags ? initialData.tags.join(', ') : '');
  const [category, setCategory] = useState(initialData.category || '');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (initialData.image) {
      setImage(initialData.image);
    }
  }, [initialData.image]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('question', question);
    formData.append('answer', answer);
    formData.append('tags', tags.split(',').map(tag => tag.trim()));
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <div>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="image-upload">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
          {image && <span>{image.name}</span>}
        </label>
      </div>
      <Button type="submit" variant="contained" color="primary">
        Save Flashcard
      </Button>
    </form>
  );
};

export default FlashcardForm;