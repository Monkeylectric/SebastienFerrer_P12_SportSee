import { NavLink } from "react-router-dom";
import './IconButton.css';

function IconButton(props) {
    return (
        <div className="icon_container">
            <img className="icon" src={props.src} alt="icône" />
        </div>
    )
}

export default IconButton;