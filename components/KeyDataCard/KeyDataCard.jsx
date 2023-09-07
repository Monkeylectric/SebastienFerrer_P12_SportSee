import React from 'react';
import './KeyDataCard.css';

import Flame from '../../images/flame.png';
import Chiken from '../../images/chiken.png';
import Apple from '../../images/apple.png';
import Cheeseburger from '../../images/cheeseburger.png';

function KeyDataCard(props) {
    let value, unit, name, icon, fill;

    switch (props.dataKey) {
        case "calorieCount":
            value = props.dataValue;
            unit = "kCal";
            name = "Calories";
            icon = Flame;
            fill = "rgba(255, 0, 0, 0.1)";
            break;
        case "proteinCount":
            value = props.dataValue;
            unit = "g";
            name = "Proteines";
            icon = Chiken;
            fill = "rgba(74, 184, 255, 0.1)";
            break;
        case "carbohydrateCount":
            value = props.dataValue;
            unit = "g";
            name = "Glucides";
            icon = Apple;
            fill = "rgba(249, 206, 35, 0.1)";
            break;
        case "lipidCount":
            value = props.dataValue;
            unit = "g";
            name = "Lipides";
            icon = Cheeseburger;
            fill = "rgba(253, 81, 129, 0.1)";
            break;
        default:
            break;
    }

    return (
        <div className='key_data_container'>
            <div className='key_data_img_container' style={{backgroundColor: fill}}>
                <img src={ icon } alt="icône" />
            </div>
            <div className='key_data_info_container'>
                <div className='key_data_info_value'>{value + unit}</div>
                <div className='key_data_info_unit'>{name}</div>
            </div>
        </div>
    );
}

export default KeyDataCard;