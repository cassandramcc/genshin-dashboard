import Character from './Character';

function Characters({ charactersObject }) {
  let charactersList = []
  const charactersMap = new Map(Object.entries(charactersObject || {}));
  for (const [_, character] of charactersMap) {
    charactersList.push(character)
  }
  
  return (
    charactersList.map((character, index) => (
      <Character 
          key={index}
          character={character}
      />)
    )
  )
}

export default Characters;