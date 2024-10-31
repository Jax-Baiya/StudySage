// ===== services/aiService.js =====
require('dotenv').config();
const OpenAI = require('openai');

// Configure the OpenAI instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  organization: process.env.OPENAI_ORG_ID,
});

// Async function to generate flashcard content
const generateFlashcardContent = async (prompt) => {
  let retries = 3;
  let delay = 1000; // Initial delay of 1 second
  while (retries > 0) {
    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 150,
      });
      return response.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error generating flashcard content:', error);
      retries -= 1;
      if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }
  throw new Error('Failed to generate flashcard content after multiple retries');
};

module.exports = { generateFlashcardContent };
