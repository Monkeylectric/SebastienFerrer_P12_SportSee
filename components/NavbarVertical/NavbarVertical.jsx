import { NavLink } from "react-router-dom";
import './NavbarVertical.css';

import IconButton from "../IconButton/IconButton";
import relaxIcon from "../../images/relaxIcon.svg";
import swimIcon from "../../images/swimIcon.svg";
import cyclismIcon from "../../images/cyclismIcon.svg";
import dumbbellIcon from "../../images/dumbbellIcon.svg";

import Copyright from "../Copyright/Copyright";

function NavbarVertical() {
    return (
        <nav className="vertical_navbar">
            <ul className="vertical_navbar_links">
                <li className="vertical_navbar_link_item"><NavLink to="#"><IconButton src={relaxIcon} /></NavLink></li>
                <li className="vertical_navbar_link_item"><NavLink to="#"><IconButton src={swimIcon} /></NavLink></li>
                <li className="vertical_navbar_link_item"><NavLink to="#"><IconButton src={cyclismIcon} /></NavLink></li>
                <li className="vertical_navbar_link_item"><NavLink to="#"><IconButton src={dumbbellIcon} /></NavLink></li>
            </ul>
            <Copyright />
        </nav>
    )
}

export default NavbarVertical;