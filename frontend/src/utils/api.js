// File: src/utils/api.js
import axios from 'axios';

// Create an axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Set the base URL for the API
  timeout: 5000, // Set a timeout for requests (5000 ms)
});

// Add a request interceptor to include the authorization token in the headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    console.log('Attaching token to request headers');
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Function to call the login API endpoint
export const login = (credentials) => {
  console.log('API call to /auth/login with credentials:', credentials);
  return api.post('/auth/login', credentials);
};

// Function to call the register API endpoint
export const register = (credentials) => {
  console.log('API call to /auth/register with credentials:', credentials);
  return api.post('/auth/register', credentials);
};

// Function to call the flashcards API endpoint to get all flashcards
export const getFlashcards = () => {
  console.log('API call to /flashcards');
  return api.get('/flashcards');
};

// Function to get a specific flashcard by ID
export const getFlashcardById = (id) => {
  console.log(`API call to /flashcards/${id}`);
  return api.get(`/flashcards/${id}`);
};

// Function to create a new flashcard
export const createFlashcard = (flashcard) => {
  console.log('API call to create new flashcard:', flashcard);
  return api.post('/flashcards', flashcard);
};

// Function to update an existing flashcard
export const updateFlashcard = (id, flashcard) => {
  console.log(`API call to update flashcard with id: ${id}`, flashcard);
  return api.put(`/flashcards/${id}`, flashcard);
};

// Function to delete a flashcard
export const deleteFlashcard = (id) => {
  console.log(`API call to delete flashcard with id: ${id}`);
  return api.delete(`/flashcards/${id}`);
};

// Function to generate a flashcard via AI
export const generateFlashcard = (prompt) => {
  console.log('API call to generate flashcard:', prompt);
  return api.post('/ai/generate', prompt);
};

export default api;