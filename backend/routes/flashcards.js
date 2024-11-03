// File: backend/routes/flashcards.js
const express = require('express');
const router = express.Router();
const {
  createFlashcard,
  getFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard
} = require('../controllers/flashcardController');
const { protect } = require('../middleware/authMiddleware');

// Define routes and associate them with the appropriate controller function
router.route('/').post(protect, createFlashcard).get(protect, getFlashcards);
router.route('/:id').get(protect, getFlashcardById).put(protect, updateFlashcard).delete(protect, deleteFlashcard);

console.log('Flashcards routes initialized'); // Debug log

module.exports = router;