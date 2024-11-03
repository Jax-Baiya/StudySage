## 1. README.md

### Project Title and Description

- **Title**: StudySage
- **Description**: StudySage is a flashcard management application that leverages AI for dynamic flashcard generation. Users can create, update, and delete flashcards, with AI-assisted suggestions to improve learning efficiency.

### Getting Started

- **Prerequisites**: Node.js (version 14.x or higher), npm (version 6.x or higher), MongoDB, dotenv file configuration.
- **Installation**:
    1. Clone the repository: `git clone <repo_url>`
    2. Install dependencies: `npm install`
    3. Configure environment variables in a `.env` file.
    4. Start the server: `npm start`

### Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **AI Integration**: OpenAI API for generating flashcard content.
- **Security**: JWT for authentication, bcrypt for password hashing.

### Features

### Feature Summary

StudySage provides a range of features designed to help users effectively manage and enhance their learning experience. Key features include secure authentication, AI-powered content creation, and personalized user management tools.

- User registration and login with JWT-based authentication.
- AI-generated content for flashcards.
- CRUD operations for flashcards.
- User profiles for a personalized experience, allowing users to manage study preferences and view progress.

### Usage

### Account Management

- **Register**: Create a new account using an email and password.
- **Login**: Obtain a JWT for further interactions.

### Flashcard Management

- **Flashcards**: Use the `/flashcards` endpoint for creating, retrieving, updating, and deleting flashcards.

### Configuration

- **Environment Variables**:
    - `PORT`: The port on which the server runs.
    - `MONGO_URI`: MongoDB connection string.
    - `JWT_SECRET`: Secret for JWT token generation.
    - `OPENAI_API_KEY`: API key for OpenAI.

### API Documentation

- **Endpoints**:
    - `/register`: Register a new user.
    - `/login`: Authenticate user and return JWT.
    - `/flashcards`: CRUD operations for flashcards.
- **Requests and Responses**: Details about required fields and response formats.

### Project Structure

- **models/**: User and Flashcard schemas.
- **routes/**: Authentication and flashcard routes.
- **controllers/**: Logic for handling requests.
- **middleware/**: Auth middleware for route protection.

### Testing

- Use `npm test` to run unit and integration tests.

### Contributing

- Fork the repository and create pull requests for contributing.

### License

- Distributed under the MIT License.

### Acknowledgments

- Special thanks to OpenAI for providing AI content generation capabilities.

---
/*
 * StudySage Frontend Code Overview
 * Technologies: React.js, Material-UI
 * This document provides the full code for the StudySage frontend, structured as requested.
 */

// File: src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme';
import { BrowserRouter as Router } from 'react-router-dom';

// Get the root container element from the DOM
const container = document.getElementById('root');
// Create a root for React 18 concurrent rendering
const root = createRoot(container);
console.log('Rendering root component');
// Render the app inside the root
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);

// File: src/App.js
import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/common/Header';

// Lazy load components for code splitting and performance optimization
const Dashboard = lazy(() => import('./pages/Dashboard'));
const FlashcardDetail = lazy(() => import('./pages/FlashcardDetail'));
const FlashcardEdit = lazy(() => import('./pages/FlashcardEdit'));
const FlashcardCreate = lazy(() => import('./pages/FlashcardCreate'));
const Settings = lazy(() => import('./pages/Settings'));
const GenerateFlashcard = lazy(() => import('./pages/GenerateFlashcard'));

function App() {
  console.log('App component rendered');
  return (
    <>
      {/* Header is always rendered */}
      <Header />
      {/* Suspense component to handle lazy loading fallback */}
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/flashcard/create" element={<FlashcardCreate />} />
          <Route path="/flashcard/:id" element={<FlashcardDetail />} />
          <Route path="/flashcard/edit/:id" element={<FlashcardEdit />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/generate-flashcard" element={<GenerateFlashcard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// File: src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import Flashcard from '../components/flashcards/Flashcard';
import { getFlashcards } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [flashcards, setFlashcards] = useState([]); // State to store flashcards
  const [loading, setLoading] = useState(true); // State to handle loading indicator
  const [error, setError] = useState(''); // State to store any errors
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch flashcards when the component mounts
    const fetchFlashcards = async () => {
      try {
        console.log('Fetching flashcards');
        const response = await getFlashcards();
        console.log('Flashcards fetched successfully:', response.data);
        setFlashcards(response.data);
      } catch (error) {
        console.error('Error fetching flashcards:', error);
        setError('Failed to fetch flashcards. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchFlashcards();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">Welcome to your personalized dashboard!</Typography>
      {/* Buttons for navigating to create flashcard, generate flashcard, and settings pages */}
      <Button variant="contained" color="primary" onClick={() => navigate('/flashcard/create')}>
        Add New Flashcard
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate('/generate-flashcard')} style={{ marginLeft: '1rem' }}>
        Generate Flashcard via AI
      </Button>
      <Button variant="contained" color="default" onClick={() => navigate('/settings')} style={{ marginLeft: '1rem' }}>
        Settings
      </Button>
      {/* Show loading indicator, error message, or flashcards list */}
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        flashcards.map((card) => (
          <Flashcard key={card._id} id={card._id} question={card.title} answer={card.content} />
        ))
      )}
    </Container>
  );
}

export default Dashboard;

// File: src/pages/GenerateFlashcard.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { generateFlashcard, createFlashcard } from '../utils/api'; // Import createFlashcard from api
import { useNavigate } from 'react-router-dom';

function GenerateFlashcard() {
  const [prompt, setPrompt] = useState(''); // State to store the user's prompt
  const [flashcard, setFlashcard] = useState(null); // State to store the generated flashcard
  const [error, setError] = useState(''); // State to store any errors
  const navigate = useNavigate();

  const handleGenerate = async () => {
    try {
      console.log('Generating flashcard with prompt:', prompt);
      const response = await generateFlashcard({ prompt });
      setFlashcard(response.data);
      setError('');
    } catch (error) {
      console.error('Error generating flashcard:', error);
      setError('Failed to generate flashcard. Please try again later.');
    }
  };

  const handleSave = async () => {
    try {
      console.log('Saving generated flashcard:', flashcard);
      await createFlashcard(flashcard);
      setError('');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error saving flashcard:', error);
      setError('Failed to save flashcard. Please try again later.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Generate Flashcard via AI</Typography>
      {/* Input field for the prompt */}
      <TextField
        label="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        fullWidth
        margin="normal"
      />
      {/* Button to trigger flashcard generation */}
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate
      </Button>
      {/* Display error message if any */}
      {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}
      {/* Display generated flashcard if available */}
      {flashcard && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">Generated Flashcard:</Typography>
          <Typography variant="h6">{flashcard.title}</Typography>
          <Typography variant="body1">{flashcard.content}</Typography>
          {/* Button to save the generated flashcard */}
          <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: '1rem' }}>
            Save Flashcard
          </Button>
          {/* Button to navigate back to the dashboard */}
          <Button variant="contained" color="secondary" onClick={() => navigate('/dashboard')} style={{ marginTop: '1rem', marginLeft: '1rem' }}>
            Back to Dashboard
          </Button>
        </div>
      )}
    </Container>
  );
}

export default GenerateFlashcard;

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
