import Button from './Button'
import './Titlebar.css'
import {AddCharacter} from "../wailsjs/go/main/App";
import Popup from './Popup';

function Titlebar() {

    function openForm() {
        document.getElementById("characterForm").style.display = "block";
    }

    function addCharacter({character}) {
        AddCharacter(character).then(() => {
            alert('Character added successfully!')
        }).catch((error) => {
            alert('Failed to add character: ' + error.message);
        })
    }


    return (
        <div className="titlebar">
            <Popup text={"Add Character"}/>
            <div className="title">
                <img src="/assets/images/icon.png"/>
                <h1>Genshin Dashboard</h1>
            </div>
            <Button text="Add Character" onClick={() => addCharacter({character: {name: 'New Character'}})} />
        </div>
    )
}

export default Titlebar