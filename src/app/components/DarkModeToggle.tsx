/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <img src='mode.png' className='w-7 h-7 cursor-pointer' alt='mode' onClick={toggleDarkMode}/>
  );
};

export default DarkModeToggle;
