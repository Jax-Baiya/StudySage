// ===== services/aiService.js =====
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateFlashcardContent = async (prompt) => {
  let retries = 3;
  let delay = 1000; // Initial delay of 1 second
  while (retries > 0) {
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
      });
      return response.data.choices[0].text;
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
