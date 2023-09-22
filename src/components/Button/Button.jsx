import './Button.css';
import { Link } from 'react-router-dom';

function Button(props) {
    const dashboardLink = `./dashboard/${props.id}`;
    return (
        <Link to={dashboardLink} className="dashboard_btn">
            <p className="dashboard_name">{props.name}</p>
        </Link>
    );
}

export default Button;