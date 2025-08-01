import Popup from 'reactjs-popup';
import './Popup.css'

export default ({ text }) => (
  <Popup trigger={<button> {text}</button>} modal>
    <div>
        <form className='form'>
            <label>
                Name
                <input type="text"/>
            </label>

            <label>
                Element
                <input type="radio" value="Anemo" name="element"/>
                <label>Anemo</label>
                <input type="radio" name="element" value="Geo"/>
                <label>Geo</label>
                <input type="radio" name="element" value="Electro"/>
                <label>Electro</label>
                <input type="radio" name="element" value="Dendro"/>
                <label>Dendro</label>   
                <input type="radio" name="element" value="Hydro"/>
                <label>Hydro</label>
                <input type="radio" name="element" value="Pyro"/>
                <label>Pyro</label>
                <input type="radio" name="element" value="Cryo"/>
                <label>Cryo</label>
            </label>

            <input type="submit" value="Submit"/>
        </form> 
    </div>
  </Popup>
);