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

// Function to call the flashcards API endpoint
export const getFlashcards = () => {
  console.log('API call to /flashcards');
  return api.get('/flashcards');
};

export default api;