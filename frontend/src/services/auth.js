// ===== frontend/src/services/auth.js =====
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};