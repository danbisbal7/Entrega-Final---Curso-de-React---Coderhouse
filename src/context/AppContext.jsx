import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    const updatedIsDarkMode = !isDarkMode;
    setIsDarkMode(updatedIsDarkMode);
  
    const body = document.querySelector('body');
    if (updatedIsDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  };
  

  return (
    <AppContext.Provider value={{ isDarkMode, handleToggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};