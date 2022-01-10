import React from 'react';
import StyledActivity from './Activity.styled'
import Radio from './../Radio/Radio'

const Activity = () => {
    return (
        <StyledActivity>
            <h4>Jaka jest twoja aktywność fizyczna?</h4>
            <Radio><p className ="activity__name"> Mała aktywność</p><p className ="activity__description">Siedzący tryb życia, sporadyczne treningi</p> </Radio>
            <Radio><p className ="activity__name"> Średnia aktywność </p><p className ="activity__description">1-3 treningi w tygodniu</p> </Radio>
            <Radio><p className ="activity__name"> Duża aktywność </p><p className ="activity__description">Conajmniej 4 treningi w tygodniu</p> </Radio>
        </StyledActivity>
    )
}

export default Activity;

