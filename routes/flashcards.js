// ===== routes/flashcards.js =====
const express = require('express');
const {
  createFlashcard,
  getFlashcards,
  updateFlashcard,
  deleteFlashcard,
} = require('../controllers/flashcardController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Debug logs to ensure functions are defined correctly
if (typeof createFlashcard !== 'function') throw new Error('createFlashcard is not a function');
if (typeof getFlashcards !== 'function') throw new Error('getFlashcards is not a function');
if (typeof updateFlashcard !== 'function') throw new Error('updateFlashcard is not a function');
if (typeof deleteFlashcard !== 'function') throw new Error('deleteFlashcard is not a function');

// Define routes and associate them with the appropriate controller function
router.route('/').post(protect, createFlashcard).get(protect, getFlashcards);
router.route('/:id').put(protect, updateFlashcard).delete(protect, deleteFlashcard);

module.exports = router;
