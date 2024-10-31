// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
// src/services/api.js (extended)
export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const generateFlashcard = (prompt) => api.post('/ai/generate', { prompt });
export const createFlashcard = (data, token) => 
  api.post('/flashcards', data, { headers: { Authorization: `Bearer ${token}` } });
