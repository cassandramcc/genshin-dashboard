import Popup from 'reactjs-popup';
import './Popup.css'
import { AddCharacter } from '../wailsjs/go/main/App';
import FormStats from './FormStats';

const currentPrefix = 'current_';
const targetPrefix = 'target_';

function handleSubmit(event, setCharacters) {
  event.preventDefault();
  let character = {
    name: event.target.name.value,
    element: event.target.element.value,
    level: parseInt(event.target.level.value),
    notes: event.target.notes.value,
    current_stats: {
      hp: parseFloat(event.target[`${currentPrefix}hp`].value),
      attack: parseFloat(event.target[`${currentPrefix}atk`].value),
      defense: parseFloat(event.target[`${currentPrefix}def`].value),
      crit_rate: parseFloat(event.target[`${currentPrefix}critRate`].value),
      crit_damage: parseFloat(event.target[`${currentPrefix}critDmg`].value),
      energy_recharge: parseFloat(event.target[`${currentPrefix}energyRecharge`].value),
      elemental_mastery: parseFloat(event.target[`${currentPrefix}em`].value),
      physical_damage_bonus: parseFloat(event.target[`${currentPrefix}physicalDmgBonus`].value),
      elemental_damage_bonus: parseFloat(event.target[`${currentPrefix}elementalDmgBonus`].value)
    },
    target_stats: {
      hp: parseFloat(event.target[`${targetPrefix}hp`].value),
      attack: parseFloat(event.target[`${targetPrefix}atk`].value),
      defense: parseFloat(event.target[`${targetPrefix}def`].value),
      crit_rate: parseFloat(event.target[`${targetPrefix}critRate`].value),
      crit_damage: parseFloat(event.target[`${targetPrefix}critDmg`].value),
      energy_recharge: parseFloat(event.target[`${targetPrefix}energyRecharge`].value),
      elemental_mastery: parseFloat(event.target[`${targetPrefix}em`].value),
      physical_damage_bonus: parseFloat(event.target[`${targetPrefix}physicalDmgBonus`].value),
      elemental_damage_bonus: parseFloat(event.target[`${targetPrefix}elementalDmgBonus`].value)
    }
  }

  addCharacter({character: character, setCharacters: setCharacters});
}

function addCharacter({character, setCharacters}) {
  AddCharacter(character).then((characters) => {
    alert('Character added successfully!')
    setCharacters(characters);
  }).catch((error) => {
    alert('Failed to add character: ' + error.message);
  })
}

function createElementRadio() {
  const elements = ['anemo', 'geo', 'electro', 'dendro', 'hydro', 'pyro', 'cryo'];
  return elements.map((element) => (
    <div key={element}>
      <input type="radio" name="element" value={element} id={element}/>
      <label htmlFor={element}>{element.charAt(0).toUpperCase() + element.slice(1)}</label>
    </div>
  ));
}


export default ({ text, setCharacters }) => (

  <Popup trigger={<button> {text}</button>} modal>
      <form className="form" onSubmit={e => handleSubmit(e, setCharacters)}>
        
        <div className='form-header'>
          <h3>Add Character</h3>
          <label htmlFor='name'>Name</label>
          <input type="text" id="name"/>

          <label htmlFor='level'>Level</label>
          <input type="number" id="level" min="1" max="90"/>

          <label htmlFor='notes'>Notes</label>
          <textarea id="notes" rows="5" cols="15" placeholder="Add any notes about the character here..."></textarea>

          <div className='form-submit'>
            <button type="submit">Submit</button>
          </div>
        </div>

        <div className='form-elements'>
          <h3>Element</h3>
          {createElementRadio()}
        </div>

        <FormStats title="Current Stats" idPrefix={`${currentPrefix}`}/>
        <FormStats title="Target Stats" idPrefix={`${targetPrefix}`}/>
      
    </form>
  </Popup>
);