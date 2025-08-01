import Character from './Character';

function Characters({ characters }) {
    return (
        characters.map((character, index) => (
            <Character 
                key={index}
                character={character}
            />)
        )
    )
}

export default Characters;