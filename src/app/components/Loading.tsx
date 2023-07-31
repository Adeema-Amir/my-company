"use client"

import React, { useEffect, useState } from 'react';
import One from './Home';

const LoadingScreen = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a 10-second delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <center className='dark:bg-black'>
      {!showContent ? (
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-900"></div>
        ) : (
              <One />
        )}
      </center>
    </>
  );
};

export default LoadingScreen;
