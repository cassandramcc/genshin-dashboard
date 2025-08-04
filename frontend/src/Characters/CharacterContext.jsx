import { createContext, useContext } from 'react';
import { UpdateCharacter } from '../../wailsjs/go/main/App';

const CharacterContext = createContext();

export function CharacterProvider({ children, characterName }) {
  const updateStat = async (statPath, value) => {
    try {
      // Convert the value to a number if it's a string
      const numericValue = typeof value === 'string' ? parseFloat(value) : value;
      
      if (isNaN(numericValue)) {
        console.error('Invalid numeric value:', value);
        return;
      }

      // Construct the full JSON path: charactername.statPath
      const fullPath = `${characterName}.${statPath}`;
      
      // Call the Go backend to update the JSON file
      await UpdateCharacter(characterName, fullPath, numericValue);
      console.log(`Updated ${characterName} ${fullPath} to ${numericValue}`);
    } catch (error) {
      console.error('Error updating character stat:', error);
    }
  };

  return (
    <CharacterContext.Provider value={{ characterName, updateStat }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
}
