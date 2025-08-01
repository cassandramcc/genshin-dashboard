import {useState, useEffect} from 'react';
import './App.css';
import {GetCharacters} from "../wailsjs/go/main/App";
import Characters from './Characters/Characters';

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
        <Characters characters={characters} />
    )
}

export default App
