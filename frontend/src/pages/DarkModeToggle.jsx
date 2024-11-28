// File: frontend/src/pages/DarkModeToggle.js
import React from 'react';

function DarkModeToggle({ toggleDarkMode, isDarkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;