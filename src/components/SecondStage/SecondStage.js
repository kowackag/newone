import React from 'react';
import StyledSecondStage from './SecondStage.styled';
import Subtitle from './../Subtitle/Subtitle';
import Box from './../Box/Box';
import ButtonBox from './../ButtonBox/ButtonBox';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Radio from './../Radio/Radio';
import Error from './../Error/Error';
import Column from './../Column/Column';
import BMI from './BMI/BMI';

const SecondStage = ({state, active, bmi, back, onSubmit, onChange, errors}) => {
   
    const {goal, targetWeight} = state;
    const {goal: errGoal, weight:errTargetWeight} = errors;

    const fields = [
        {name:'goal', value: 'stable', desc: 'Utrzymanie masy ciała'}, 
        {name:'goal', value: 'reduction', desc: 'Redukcja masy ciała'}, 
        {name:'goal', value: 'muscle-mass', desc: 'Wzrost masy mięśniowej'}
    ];

    return( 
        <StyledSecondStage active={active}>
            <form className="form" onSubmit ={onSubmit}>
                <Box>
                    <Column>
                    <Subtitle>Cel diety:</Subtitle>
                        {fields.map(({name, value, desc})=><Radio key={value} active={goal===value} name={name} value={value} onClick={onChange}><p>{desc}</p></Radio>)}
                        {errGoal &&<Error err={errGoal}/>}
                        {(goal === 'reduction' || goal === 'muscle-mass') && 
                        <>
                            <Label>Docelowa masa ciała</Label> 
                            <Input className="form__value" type="number" unit="kg" name="targetWeight" value={targetWeight} onChange={onChange}/> 
                            {errTargetWeight&&<Error err={errTargetWeight}/>}
                        </>}
                    </Column>
                    <BMI className="BMI" bmi={bmi}/>
                </Box>
                <ButtonBox>
                    <Button onClick={back} type="button">Wstecz</Button>
                    <Button>Dalej</Button>
                </ButtonBox>
            </form>
        </StyledSecondStage>
    )
}

export default SecondStage;