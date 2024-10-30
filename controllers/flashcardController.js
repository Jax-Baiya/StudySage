// ===== controllers/flashcardController.js =====
const Flashcard = require('../models/Flashcard');

// Create a new flashcard
const createFlashcard = async (req, res) => {
  const { title, content } = req.body;

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
  try {
    const flashcards = await Flashcard.find({ user: req.user._id });
    console.log('Retrieved flashcards:', flashcards); // Debug log
    res.status(200).json(flashcards);
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    res.status(500).json({ message: `Error fetching flashcards: ${error.message}` });
  }
};

// Update a flashcard
const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const flashcard = await Flashcard.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title, content },
      { new: true, runValidators: true, upsert: false }
    );

    if (!flashcard) {
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

  try {
    const flashcard = await Flashcard.findById(id);

    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }

    if (flashcard.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await flashcard.remove();
    console.log('Flashcard deleted:', flashcard); // Debug log
    res.status(200).json({ message: 'Flashcard removed' });
  } catch (error) {
    console.error('Error deleting flashcard:', error);
    res.status(500).json({ message: `Error deleting flashcard: ${error.message}` });
  }
};

module.exports = {
  createFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard,
};
