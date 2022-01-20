import React from 'react';
import StyledSecondStage from './SecondStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Radio from './../Radio/Radio'
import BMI from './../BMI/BMI';

const SecondStage = ({state, active, bmi, back, onSubmit, onChange, onClick, errors}) => {
   
    const {goal, targetWeight} = state;
    const {goal:errGoal, weight:errTargetWeight} = errors;

    return( 
        <StyledSecondStage active={active}>
            <h4 className="goal-header">Cel diety</h4>
            <form className="form" onSubmit ={onSubmit}>
                <div className="form__option">
                    <Radio active={goal==="stable"} name="goal" value="stable" onClick={onClick}><p>Utrzymanie masy ciała</p></Radio>
                    <Radio active={goal==="reduction"} name="goal" value="reduction" onClick={onClick}><p>Redukcja masy ciała</p></Radio>
                    <Radio active={goal==="muscle-mass"} name="goal" value="muscle-mass" onClick={onClick}><p>Wzrost masy mięśniowej</p></Radio>
                    {errGoal &&<p className="errors">{errGoal}</p>}
                    {(goal === 'reduction' || goal === 'muscle-mass') && 
                    <>
                        <Label>Docelowa masa ciała</Label> 
                        <Input className="form__value" type="number" unit="kg" name="targetWeight" value={targetWeight} onChange={onChange}/> 
                        {errTargetWeight&&<p className="errors">{errTargetWeight}</p>}
                    </>}
                </div>
                <BMI className="BMI" bmi={bmi}/>
                <div className="form__buttons buttons ">
                    <Button value="Wstecz" name="back" onClick={back} type="button"/>
                    <Button value="Dalej" name="next" type="submit"/>
                </div>
            </form>
        </StyledSecondStage>
    )
}

export default SecondStage;