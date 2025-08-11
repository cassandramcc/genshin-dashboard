import {useState, useEffect} from 'react';
import './App.css';
import {GetCharacters} from "../wailsjs/go/main/App";
import Characters from './Characters/Characters';
import {AppProvider} from './AppContext';
import Titlebar from './Titlebar'

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCharacters();
  }, []);

  function getCharacters() {
    setLoading(true);
    GetCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    }).catch((error) => {
      console.error('Error fetching characters:', error);
      setLoading(false);
    });
  }

  if (loading) {
    return <div>Loading characters...</div>;
  }

  if (characters.length === 0) {
    return <div>No characters found.</div>;
  }

  return (
    <>
      <Titlebar setCharacters={setCharacters} />
      <AppProvider setCharacters={setCharacters}>
        <Characters charactersObject={characters} setCharacters={setCharacters} />
      </AppProvider>
    </>
  )
}

export default App
