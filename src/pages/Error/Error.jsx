import React from 'react';
import { Link } from "react-router-dom";
import './Error.css';

import NavbarHorizontal from '../../components/NavbarHorizontal/NavbarHorizontal';

function Error(props) {
    const sentences = {
        "404": "Oups! La page que vous demandez n'existe pas.",
    }

    return (
        <React.Fragment>
            <NavbarHorizontal />
            <main className='main_error'>
                <div className="error_container">
                    <div className="error_content">
                        <div className="error_number">{props.number}</div>
                        <div className="error_sentence">{sentences[props.number]}</div>
                        <Link to="/" className="error_return">Retourner sur la page d'accueil</Link>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Error;