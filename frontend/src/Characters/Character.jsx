import './Character.css';
import StatBlock from './StatBlock';
import { CharacterProvider } from './CharacterContext';

function Character({ character }) {

    function convertElement(element) {
        switch (element) {
        case "anemo":
            return "/assets/images/anemo.png"
        case "geo":
            return "/assets/images/geo.png"
        case "electro":
            return "/assets/images/electro.png"
        case "dendro":
            return "/assets/images/dendro.png"
        case "hydro":
            return "/assets/images/hydro.png"
        case "pyro":
            return "/assets/images/pyro.png"
        case "cryo":
            return "/assets/images/cryo.png"
        default:
            return "/assets/images/unknown.png"
        }
    }


  if (!character) {
    return <div className="character-container">No character data available</div>;
  }

  return (
    <CharacterProvider characterName={character.name.toLowerCase()}>
      <div className="character-container">
        <div className="character-header">
          <img src={character.picture} className="character-picture" />
          <h2 className="character-name">{character.name}</h2>
          <div className="level-icon-block">
              <span className="character-level">Level {character.level}</span>
              <img src={convertElement(character.element)} className="character-icon" alt={`${character.name} icon`} />
          </div>
        </div>
        
        <div className="stats-container">
          <StatBlock currentStats={character.current_stats} targetStats={character.target_stats} />
        </div>

        {character.notes && character.notes.length > 0 && (
          <div className="notes-container">
            <p>{character.notes}</p>
          </div>
        )}

      </div>
    </CharacterProvider>
  );
}

export default Character;