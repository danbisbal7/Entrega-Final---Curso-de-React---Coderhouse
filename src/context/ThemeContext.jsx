import React, {createContext, useState} from 'react';

// Se desarrolla la logica para agregar el modo oscuro

export const ThemeContext = createContext({
    isDarkMode: false,
    setIsDarkMode: () => {},
  });

export const  ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
