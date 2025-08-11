import { createContext, useContext } from 'react';
import { UpdateCharacter } from '../wailsjs/go/main/App';

const AppContext = createContext();

export function AppProvider({ children, setCharacters }) {
  const updateStat = async (statPath, value) => {
    try {
      // Convert the value to a number if it's a string
      const numericValue = typeof value === 'string' ? parseFloat(value) : value;
      
      if (isNaN(numericValue)) {
        console.error('Invalid numeric value:', value);
        return;
      }
      
      // Call the Go backend to update the JSON file
      await UpdateCharacter(statPath, numericValue);

    } catch (error) {
      console.error('Error updating character stat:', error);
    }
  };

   return (
    <AppContext.Provider value={{ updateStat }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}