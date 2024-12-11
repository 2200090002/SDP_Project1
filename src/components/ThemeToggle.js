import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for the user's preference on page load
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // Returns true if darkMode is saved as 'true'
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
    // Save the current theme to localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
