// File: src/App.js
import React, { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/common/Header';

// Lazy load the Dashboard component for better performance
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  console.log('App component rendered');
  return (
    <>
      {/* Render the header component */}
      <Header />
      {/* Use Suspense to show a fallback while loading the Dashboard component */}
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><CircularProgress /></div>}>
        <Routes>
          {/* Define application routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;