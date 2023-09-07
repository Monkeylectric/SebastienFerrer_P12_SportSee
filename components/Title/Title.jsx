import React from 'react';
import './Title.css';

function Title(props) {
    const data = props.data;
    const userInfos = data.userInfos;

    return (
        <div className='title_container'>
            <div className='title'>Bonjour <span className='colored_text'>{ userInfos.firstName }</span></div>
            <div className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
        </div>
    );
}

export default Title;