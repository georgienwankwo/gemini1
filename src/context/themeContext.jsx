import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(`light`);
  function handleTheme() {
    setThemeMode((prev) => {
      return prev === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <ThemeContext.Provider value={{ themeMode, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
