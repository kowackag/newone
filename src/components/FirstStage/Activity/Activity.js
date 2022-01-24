import React from 'react';
import StyledActivity from './Activity.styled';
import Radio from '../../Radio/Radio';
import Error from './../../Error/Error';
import {v4 as uuid} from 'uuid';

const Activity = (props) => {
    const fields = [
        {name: 'activity', value: 'none', label: 'Brak aktywności', desc: 'Siedzący tryb życia'},
        {name: 'activity', value: 'low', label: 'Mała aktywność', desc: 'Sporadyczne treningi'},
        {name: 'activity', value: 'med', label: 'Średnia aktywność', desc: '1-3 treningi w tygodniu'},
        {name: 'activity', value: 'hight', label: 'Duża aktywność', desc: 'Conajmniej 4 treningi w tygodniu' }
    ]

    return (
        <StyledActivity>
            <h4>Jaka jest twoja aktywność fizyczna?</h4>
            {fields.map(({name, value, label, desc}) => <Radio key={uuid()} name={name} value={value} onClick={props.onClick} active={value===props.activity}><p className ="radio__name"> {label}</p><p className ="radio__description">{desc}</p> </Radio>)}
            <Error err={props.error}/>
        </StyledActivity>
    )
}

export default Activity;

