const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateFlashcardContent = async (prompt) => {
  try {
    const response = await genAI.generateText({
      prompt,
      maxTokens: 150,
    });
    return response.text;  // Make sure this matches the API's response format.
  } catch (error) {
    console.error('Error generating flashcard content:', error);
    throw new Error('Failed to generate flashcard content');
  }
};

module.exports = { generateFlashcardContent };
