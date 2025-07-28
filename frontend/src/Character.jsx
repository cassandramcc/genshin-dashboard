import './Character.css';

function Character({ character }) {

    const red    = [204, 50, 50]
    const yellow = [231, 180, 22]
    const green  = [78, 197, 49]
    const blue   = [62, 205, 233]

    const max_percentage = 1.5

    function calculatePercentage(x, y) {
        if (y == 0) {
            // if the y is 0, return 1.5 = 150%
            return max_percentage
        }

        return Math.min(x / y, max_percentage)
    }

    function chooseColour(current, target)  {
        let percentage = calculatePercentage(current, target)

        if (percentage <= 0.9) {
            let result = interpolate(red, yellow, percentage)
            return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
        } else if (percentage <= 1) {
            let result = interpolate(yellow, green, percentage)
            return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
        } else {
             let result = interpolate(green, blue, percentage)
            return `rgb(${result[0]}, ${result[1]}, ${result[2]})`
        }
    }

    function interpolate(colour1, colour2, percentage) {
        let difference  = []
        for (let i = 0 ; i < colour1.length; i++) {
            difference[i] = colour2[i] - colour1[i]
        }
        
        let scaled = []
        for (let i = 0 ; i < difference.length; i++) {
            scaled[i] = percentage*difference[i]
        }

        let output = []
        for (let i = 0 ; i < colour1.length; i++) {
            output[i] = colour1[i] + scaled[i]
        }
        return output
    }

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

  let StatBlock = ({ currentStats, targetStats }) => (
    <>
        <div className="stat-block">
        <h3>Current Stats</h3>
        <div className="stats-grid">
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.hp, targetStats.hp)}}>
                <span className="stat-label">HP:</span>
                <span className="stat-value">{currentStats.hp}</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.attack, targetStats.attack)}}>
                <span className="stat-label">Attack:</span>
                <span className="stat-value">{currentStats.attack}</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.defense, targetStats.defense)}}>
                <span className="stat-label">Defense:</span>
                <span className="stat-value">{currentStats.defense}</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.elemental_mastery, targetStats.elemental_mastery)}}>
                <span className="stat-label">Elemental Mastery:</span>
                <span className="stat-value">{currentStats.elemental_mastery}</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.energy_recharge, targetStats.energy_recharge)}}>
                <span className="stat-label">Energy Recharge:</span>
                <span className="stat-value">{currentStats.energy_recharge}%</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.crit_rate, targetStats.crit_rate)}}>
                <span className="stat-label">Crit Rate:</span>
                <span className="stat-value">{currentStats.crit_rate}%</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.crit_damage, targetStats.crit_damage)}}>
                <span className="stat-label">Crit Damage:</span>
                <span className="stat-value">{currentStats.crit_damage}%</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.elemental_damage_bonus, targetStats.elemental_damage_bonus)}}>
                <span className="stat-label">Elemental Damage Bonus:</span>
                <span className="stat-value">{currentStats.elemental_damage_bonus}%</span>
            </div>
            <div className="stat-item" style={{backgroundColor: chooseColour(currentStats.physical_damage_bonus, targetStats.physical_damage_bonus)}}>
                <span className="stat-label">Physical Damage Bonus:</span>
                <span className="stat-value">{currentStats.physical_damage_bonus}%</span>
            </div>
        </div>
        </div>
            <div className="stat-block">
            <h3>Target Stats</h3>
            <div className="stats-grid">
                <div className="stat-item">
                    <span className="stat-label">HP:</span>
                    <span className="stat-value">{targetStats.hp}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Attack:</span>
                    <span className="stat-value">{targetStats.attack}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Defense:</span>
                    <span className="stat-value">{targetStats.defense}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Elemental Mastery:</span>
                    <span className="stat-value">{targetStats.elemental_mastery}</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Energy Recharge:</span>
                    <span className="stat-value">{targetStats.energy_recharge}%</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Crit Rate:</span>
                    <span className="stat-value">{targetStats.crit_rate}%</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Crit Damage:</span>
                    <span className="stat-value">{targetStats.crit_damage}%</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Elemental Damage Bonus:</span>
                    <span className="stat-value">{targetStats.elemental_damage_bonus}%</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Physical Damage Bonus:</span>
                    <span className="stat-value">{targetStats.physical_damage_bonus}%</span>
                </div>
            </div>
        </div>
    </>
  );

  return (
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
    </div>
  );
}

export default Character;