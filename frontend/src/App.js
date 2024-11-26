// File: src/App.js
import React, { Suspense, lazy } from 'react';
import { CircularProgress, Box } from '@mui/material'; // Add Box import
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './contexts/theme'; // Correct the import path for theme
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Lazy load components for code splitting and performance optimization
const Dashboard = lazy(() => import('./pages/Dashboard'));
const FlashcardDetail = lazy(() => import('./pages/FlashcardDetail'));
const FlashcardEdit = lazy(() => import('./pages/FlashcardEdit'));
const FlashcardCreate = lazy(() => import('./pages/FlashcardCreate'));
const Settings = lazy(() => import('./pages/Settings'));
const GenerateFlashcard = lazy(() => import('./pages/GenerateFlashcard'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1} sx={{ paddingTop: '56px', paddingBottom: '56px' }}> {/* No `rem` used here */}
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
