// File: frontend/src/App.js
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
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
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
