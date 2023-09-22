import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import './NavbarHorizontal.css';

function NavbarHorizontal() {
    return (
        <nav className="horizontal_navbar">
            <div className="horizontal_navbar_logo_container">
                <img src={ logo } alt="" className="horizontal_navbar_logo" />
            </div>
            <ul className="horizontal_navbar_links">
                <li className="horizontal_navbar_link_item"><NavLink to="/">Accueil</NavLink></li>
                <li className="horizontal_navbar_link_item"><NavLink to="/profil">Profil</NavLink></li>
                <li className="horizontal_navbar_link_item"><NavLink to="/settings">Réglage</NavLink></li>
                <li className="horizontal_navbar_link_item"><NavLink to="/community">Communauté</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavbarHorizontal;