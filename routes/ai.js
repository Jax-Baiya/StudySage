// ===== routes/ai.js =====

const express = require('express');
const { generateAIResponse } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Route to generate AI-based flashcard content
router.post('/generate', protect, generateAIResponse);

module.exports = router;