// ===== controllers/aiController.js =====

const { generateFlashcardContent } = require('../services/aiService');

// Controller to handle AI-generated flashcard content
const generateAIResponse = async (req, res) => {
  const { prompt } = req.body;

  try {
    const aiContent = await generateFlashcardContent(prompt);
    res.status(200).json({ content: aiContent });
  } catch (error) {
    console.error('Error generating AI response:', error);
    res.status(500).json({ message: `Error generating AI response: ${error.message}` });
  }
};

module.exports = { generateAIResponse };