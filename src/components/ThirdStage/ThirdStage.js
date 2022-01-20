import React, {useState} from 'react';
import StyledThirdStage from './ThirdStage.styled';
import Radio from './../Radio/Radio';
import Button from './../Button/Button';
import Checkbox from './../Checkbox/Checkbox';
import Label from './../Label/Label';
import Input from './../Input/Input';
import Search from './../Search/Search'

const ThirdStage = ({state, active, back, onSubmit, onChange, onClick, errors}) => {

    const {diet, gluten, lactosy, excluded1, excluded2} = state;
    const {diet:errDiet} = errors;
      
    return (
       <StyledThirdStage active={active}>
           <form className="form" onSubmit = {onSubmit} >
                <div className="form__diet">
                    <Radio active={diet==="fit"} name="diet" value="fit" onClick={onClick}>
                        <p className ="radio__name">Dieta Fit</p>
                        <p className ="radio__description">Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy</p> 
                    </Radio>
                    <Radio active={diet==="vegetarian"} name="diet" value="vegetarian" onClick={onClick}>
                        <p className ="radio__name">Dieta Wegetariańska</p>
                        <p className ="radio__description">Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.</p>
                    </Radio>
                    <Radio active={diet==="keto"} name="diet" value="keto" onClick={onClick}>
                        <p className ="radio__name">Dieta ketogeniczna</p>
                        <p className ="radio__description"> Zwiększenie ilości tłuszczu, ograniczenie węglowodanów oraz umiarkowane spożycie białka.</p>
                    </Radio>
                    <Radio active={diet==="high-protein"} name="diet" value="high-protein" onClick={onClick}>
                        <p className ="radio__name">Dieta wysokobiałkowa</p>
                        <p className ="radio__description"> Urozmaicona dieta, zapewniająca uczucie sytości, dzięki daniom o dużej zawartości białka.</p>
                    </Radio>
                    {errDiet&&<p className="errors">{errDiet}</p>}
                </div>
                <div className="form__exclusion">
                    <div className="box"> 
                        <Label>Dieta bezglutenowa?</Label>
                        <Checkbox name="gluten" onClick={onClick}/>
                    </div>
                    <div className="box"> 
                        <Label>Dieta bez laktozy?</Label>
                        <Checkbox name="lactosy" onClick={onClick}/>
                    </div>
                    <h4 className="exclusion__title">Wykluczenia z diety:</h4>
                    <Label className="normal">Składnik 1</Label>
                    <Search className="form__value" type="text" name="excluded1"  onChange={onChange}/>
                    <Label className="normal">Składnik 2</Label>
                    <Search className="form__value" type="text" name="excluded2" onClick={onClick} onChange={onChange}/>
                </div>
                <div className="form__buttons buttons ">
                    <Button value="Wstecz" name="back" onClick ={back}/>
                    <Button value="Dalej" name="next" type="submit"/>
                </div>
            </form>
       </StyledThirdStage>
    )
}

export default ThirdStage;