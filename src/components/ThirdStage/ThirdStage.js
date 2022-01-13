import React from 'react';
import StyledThirdStage from './ThirdStage.styled';
import Option from './../Option/Option';
import Radio from './../Radio/Radio';
import Button from './../Button/Button';

const ThirdStage = (props) => {
    const init ={
        goal: '',
        lactosy: ''
    }
const {goal} = init;
    return (
       <StyledThirdStage active={props.active}>
           <form className="form" onSubmit = {(e)=> handleForm(e)} >
                <div className="form__option">
                    <Radio active={goal==="stable"} name="goal" value="stable" onClick={e=>dispatch({type:'click', element: e.target})}>
                        <p className ="activity__name">Dieta Fit</p>
                        <p className ="activity__description">Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy</p> 
                    </Radio>
                    <Radio active={goal==="reduction"}name="goal" value="reduction" onClick={e=>dispatch({type:'click', element: e.target})}>
                        <p className ="activity__name">Dieta Wegetariańska</p>
                        <p className ="activity__description">Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.</p>
                    </Radio>
                    <Radio active={goal==="muscle-mass"} name="goal" value="muscle-mass" onClick={e=>dispatch({type:'click', element: e.target})}>
                        <p className ="activity__name">Dieta ketogeniczna</p>
                        <p className ="activity__description"> Zwiększenie udziału tłuszczu, ograniczenie węglowodanów przy jednoczesnym umiarkowanym spożyciu białka.</p>
                    </Radio>
                    <Radio active={goal==="muscle-mass"} name="goal" value="muscle-mass" onClick={e=>dispatch({type:'click', element: e.target})}>
                        <p className ="activity__name">Dieta wysokobiałkowa</p>
                        <p className ="activity__description"> Urozmaicona dieta, zapewniająca uczucie sytości, dzięki daniom o dużej zawartości białka.</p>
                    </Radio>
                </div>
                <div className="form__buttons buttons ">
                    <Button value="Wstecz" name="back" />
                    <Button value="Dalej" name="next" type="submit"/>
                </div>
            </form>
       </StyledThirdStage>
    )
}

export default ThirdStage;