// File: backend/controllers/flashcardController.js 
const Flashcard = require('../models/Flashcard');

// Create a new flashcard
const createFlashcard = async (req, res) => {
  const { title, content } = req.body;
  console.log('Creating flashcard with title:', title); // Debug log

  try {
    const flashcard = await Flashcard.create({
      title,
      content,
      user: req.user._id,
    });

    console.log('Flashcard created:', flashcard); // Debug log
    res.status(201).json(flashcard);
  } catch (error) {
    console.error('Error creating flashcard:', error);
    res.status(500).json({ message: `Error creating flashcard: ${error.message}` });
  }
};

// Get all flashcards for the logged-in user
const getFlashcards = async (req, res) => {
  console.log('Fetching flashcards for user:', req.user._id); // Debug log
  try {
    const flashcards = await Flashcard.find({ user: req.user._id });
    console.log('Retrieved flashcards:', flashcards); // Debug log
    res.status(200).json(flashcards);
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    res.status(500).json({ message: `Error fetching flashcards: ${error.message}` });
  }
};

// Get a specific flashcard by ID
const getFlashcardById = async (req, res) => {
  console.log('Fetching flashcard by ID:', req.params.id); // Debug log
  try {
    const flashcard = await Flashcard.findOne({ _id: req.params.id, user: req.user._id });
    if (!flashcard) {
      console.warn('Flashcard not found or not authorized for ID:', req.params.id); // Debug log
      return res.status(404).json({ message: 'Flashcard not found or not authorized' });
    }
    console.log('Fetched flashcard:', flashcard); // Debug log
    res.status(200).json(flashcard);
  } catch (error) {
    console.error('Error fetching flashcard:', error);
    res.status(500).json({ message: `Error fetching flashcard: ${error.message}` });
  }
};

// Update a flashcard
const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  console.log('Updating flashcard with ID:', id, 'New title:', title, 'New content:', content); // Debug log

  try {
    const flashcard = await Flashcard.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title, content },
      { new: true, runValidators: true, upsert: false }
    );

    if (!flashcard) {
      console.warn('Flashcard not found or not authorized for update with ID:', id); // Debug log
      return res.status(404).json({ message: 'Flashcard not found or not authorized' });
    }

    console.log('Updated flashcard:', flashcard); // Debug log
    res.status(200).json(flashcard);
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ message: `Error updating flashcard: ${error.message}` });
  }
};

// Delete a flashcard
const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  console.log('Deleting flashcard with ID:', id); // Debug log

  try {
    // Use findOneAndDelete to ensure the flashcard belongs to the logged-in user
    const flashcard = await Flashcard.findOneAndDelete({ _id: id, user: req.user._id });

    if (!flashcard) {
      console.warn('Flashcard not found or not authorized for deletion with ID:', id); // Debug log
      return res.status(404).json({ message: 'Flashcard not found or not authorized' });
    }

    console.log('Deleted flashcard:', flashcard); // Debug log
    res.status(200).json({ message: 'Flashcard removed' });
  } catch (error) {
    console.error('Error deleting flashcard:', error);
    res.status(500).json({ message: `Error deleting flashcard: ${error.message}` });
  }
};

module.exports = {
  createFlashcard,
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
};