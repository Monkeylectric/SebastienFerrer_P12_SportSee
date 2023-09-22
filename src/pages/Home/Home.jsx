import React from 'react';
import './Home.css';

import NavbarHorizontal from '../../components/NavbarHorizontal/NavbarHorizontal';
import NavbarVertical from '../../components/NavbarVertical/NavbarVertical';
import Button from '../../components/Button/Button';

function Home() {
    return (
        <React.Fragment>
            <NavbarHorizontal />
            <main className='main_home'>
                <NavbarVertical />
                <section className='home'>
                    <Button name="Karl Dovineau" id={12} />
                    <Button name="Cecilia Ratorez" id={18} />
                </section>
            </main>
        </React.Fragment>
    );
}

export default Home;