import {useState, useEffect} from 'react';
import './App.css';
import {GetCharacters} from "../wailsjs/go/main/App";
import Character from './Character';

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

    var characterData = {
        name: "Character Name",
        level: 90,
        picture: "assets/images/Neuvillette_Card.webp",
        current_stats: {
            hp: 12345,
            attack: 678,
            defense: 910,
            elemental_mastery: 123,
            energy_recharge: 12.3,
            crit_rate: 45.6,
            crit_damage: 78.9,
            physical_damage_bonus: 12.3,
            elemental_damage_bonus: 45.6
        },
        target_stats: {
            hp: 15000,
            attack: 800,
            defense: 1000,
            elemental_mastery: 150,
            energy_recharge: 15.0,
            crit_rate: 50.0,
            crit_damage: 80.0,
            physical_damage_bonus: 15.0,
            elemental_damage_bonus: 50.0
        }
    }

    if (loading) {
        return <div>Loading characters...</div>;
    }

    if (characters.length === 0) {
        return <div>No characters found.</div>;
    }

    return (
        <Character character={characters[0]} />
    )
}

export default App
