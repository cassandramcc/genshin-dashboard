import Popup from 'reactjs-popup';
import './Popup.css'
import { AddCharacter } from '../wailsjs/go/main/App';

const handleSubmit = (event) => {
  event.preventDefault();
  let name = event.target.name.value
  let element = event.target.element.value
  addCharacter({character: {name: name, element: element}})
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

      <button type="submit">Submit</button>
      
    </form>
  </Popup>
);