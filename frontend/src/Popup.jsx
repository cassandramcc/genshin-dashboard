import Popup from 'reactjs-popup';
import './Popup.css'
import { AddCharacter } from '../wailsjs/go/main/App';

const handleSubmit = (event) => {
  event.preventDefault();
  let name = event.target.name.value
  let element = event.target.element.value
  let level = event.target.level.value
  let hp = event.target.hp.value
  let atk = event.target.atk.value
  let def = event.target.def.value
  let critRate = event.target.critRate.value
  let critDmg = event.target.critDmg.value
  let energyRecharge = event.target.energyRecharge.value
  let em = event.target.em.value
  let physicalDmgBonus = event.target.physicalDmgBonus.value
  let elementalDmgBonus = event.target.elementalDmgBonus.value
  let character = {
    name: name, 
    element: element, 
    level: parseInt(level), 
    current_stats: {
      hp: parseFloat(hp), 
      attack: parseFloat(atk), 
      defense: parseFloat(def), 
      crit_rate: parseFloat(critRate), 
      crit_damage: parseFloat(critDmg), 
      energy_recharge: parseFloat(energyRecharge), 
      elemental_mastery: parseFloat(em), 
      physical_damage_bonus: parseFloat(physicalDmgBonus), 
      elemental_damage_bonus: parseFloat(elementalDmgBonus)
    },
    target_stats: {
      hp: parseFloat(event.target.target_hp.value),
      attack: parseFloat(event.target.target_atk.value),
      defense: parseFloat(event.target.target_def.value),
      crit_rate: parseFloat(event.target.target_critRate.value),
      crit_damage: parseFloat(event.target.target_critDmg.value),
      energy_recharge: parseFloat(event.target.target_energyRecharge.value),
      elemental_mastery: parseFloat(event.target.target_em.value),
      physical_damage_bonus: parseFloat(event.target.target_physicalDmgBonus.value),
      elemental_damage_bonus: parseFloat(event.target.target_elementalDmgBonus.value)
    }
  }

  addCharacter({character: character});
}

function addCharacter({character}) {
  AddCharacter(character).then(() => {
    alert('Character added successfully!')
  }).catch((error) => {
    alert('Failed to add character: ' + error.message);
  })
}

export default ({ text }) => (

  <Popup trigger={<button> {text}</button>} modal>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor='name'>Name</label>
        <input type="text" id="name"/>

        <label htmlFor='level'>Level</label>
        <input type="number" id="level" min="1" max="90"/>

        <label>
          Element
          <input type="radio" name="element" value="anemo"/>
          <label>Anemo</label>
          <input type="radio" name="element" value="geo"/>
          <label>Geo</label>
          <input type="radio" name="element" value="electro"/>
          <label>Electro</label>
          <input type="radio" name="element" value="dendro"/>
          <label>Dendro</label>   
          <input type="radio" name="element" value="hydro"/>
          <label>Hydro</label>
          <input type="radio" name="element" value="pyro"/>
          <label>Pyro</label>
          <input type="radio" name="element" value="cryo"/>
          <label>Cryo</label>
        </label>

        <div>
          <h3>Current Stats</h3>
          <label htmlFor='hp'>HP</label>
          <input type="number" id="hp" min="0"/>

          <label htmlFor='atk'>ATK</label>
          <input type="number" id="atk" min="0"/>

          <label htmlFor='def'>DEF</label>
          <input type="number" id="def" min="0"/>

          <label htmlFor='critRate'>Crit Rate</label>
          <input type="number" id="critRate" min="0"/>

          <label htmlFor='critDmg'>Crit Damage</label>
          <input type="number" id="critDmg" min="0"/>

          <label htmlFor='energyRecharge'>Energy Recharge</label>
          <input type="number" id="energyRecharge" min="0"/>

          <label htmlFor='em'>Elemental Mastery</label>
          <input type="number" id="em" min="0"/>

          <label htmlFor='physicalDmgBonus'>Physical DMG Bonus</label>
          <input type="number" id="physicalDmgBonus" min="0"/>

          <label htmlFor='elementalDmgBonus'>Elemental DMG Bonus</label>
          <input type="number" id="elementalDmgBonus" min="0"/>
        </div>
        <div>
          <h3>Target Stats</h3>
          <label htmlFor='target_hp'>Target HP</label>
          <input type="number" id="target_hp" min="0"/>
          
          <label htmlFor='target_atk'>Target ATK</label>
          <input type="number" id="target_atk" min="0"/>

          <label htmlFor='target_def'>Target DEF</label>
          <input type="number" id="target_def" min="0"/>

          <label htmlFor='target_critRate'>Target Crit Rate</label>
          <input type="number" id="target_critRate" min="0"/>

          <label htmlFor='target_critDmg'>Target Crit Damage</label>
          <input type="number" id="target_critDmg" min="0"/>

          <label htmlFor='target_energyRecharge'>Target Energy Recharge</label>
          <input type="number" id="target_energyRecharge" min="0"/>

          <label htmlFor='target_em'>Target Elemental Mastery</label>
          <input type="number" id="target_em" min="0"/>

          <label htmlFor='target_physicalDmgBonus'>Target Physical DMG Bonus</label>
          <input type="number" id="target_physicalDmgBonus" min="0"/>

          <label htmlFor='target_elementalDmgBonus'>Target Elemental DMG Bonus</label>
          <input type="number" id="target_elementalDmgBonus" min="0"/>
        </div>

        <button type="submit">Submit</button>
      
    </form>
  </Popup>
);