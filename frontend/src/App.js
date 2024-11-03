// File: src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react'; 
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode setting from local storage if available
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    document.body.classList.toggle('dark-mode', savedMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode); // Save the preference
      document.body.classList.toggle('dark-mode', newMode);
      return newMode;
    });
  };

  return (
    <>
      {/* Header is always rendered with dark mode toggle */}
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
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