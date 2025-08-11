import Character from './Character';
import './css/Characters.css'

function Characters({ charactersObject }) {
  let charactersList = []
  const charactersMap = new Map(Object.entries(charactersObject || {}));
  for (const [_, character] of charactersMap) {
    charactersList.push(character)
  }
  
  return (
    <div className='characters-grid'>
      {charactersList.map((character, index) => (
        <Character 
            key={index}
            character={character}
        />)
      )}
    </div>
  )
}

export default Characters;