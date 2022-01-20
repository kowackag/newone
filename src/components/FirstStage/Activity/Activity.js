import React from 'react';
import StyledActivity from './Activity.styled'
import Radio from '../../Radio/Radio'

const Activity = (props) => {
    return (
        <StyledActivity>
            <h4 className="activity__title">Jaka jest twoja aktywność fizyczna?</h4>
            <Radio name="activity" value="none" onClick={props.onClick} active={"none"===props.activity}><p className ="radio__name"> Brak aktywności</p><p className ="radio__description">Siedzący tryb życia</p> </Radio>
            <Radio onClick={props.onClick} name="activity" value="low" active = {"low"===props.activity} ><p className ="radio__name"> Mała aktywność</p><p className ="radio__description">Sporadyczne treningi</p> </Radio>
            <Radio onClick={props.onClick} name="activity" value="med" active = {"med"===props.activity} ><p className ="radio__name"> Średnia aktywność </p><p className ="radio__description">1-3 treningi w tygodniu</p> </Radio>
            <Radio onClick={props.onClick} name="activity" value="hight" active = {"hight"===props.activity}><p className ="radio__name"> Duża aktywność </p><p className ="radio__description">Conajmniej 4 treningi w tygodniu</p> </Radio>
            {props.errors &&<p className="errors">{props.errors}</p>}
        </StyledActivity>
    )
}

export default Activity;

