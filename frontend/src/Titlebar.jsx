import './Titlebar.css'
import Popup from './Popup';

function Titlebar() {
    return (
        <div className="titlebar">
            <Popup text={"Add Character"}/>
            <div className="title">
                <img src="/assets/images/icon.png"/>
                <h1>Genshin Dashboard</h1>
            </div>
        </div>
    )
}

export default Titlebar