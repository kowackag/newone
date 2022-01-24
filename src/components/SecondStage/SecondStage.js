import React from 'react';
import StyledSecondStage from './SecondStage.styled';
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
    const {goal:errGoal, weight:errTargetWeight} = errors;

    const fields = [
        {name:'goal', value: 'stable', desc: 'Utrzymanie masy ciała'}, 
        {name:'goal', value: 'reduction', desc: 'Redukcja masy ciała'}, 
        {name:'goal', value: 'muscle-mass', desc: 'Wzrost masy mięśniowej'}
    ];

    return( 
        <StyledSecondStage active={active}>
            <h4 className="goal-header">Cel diety</h4>
            <form className="form" onSubmit ={onSubmit}>
                <Box>
                    <Column>
                        {fields.map(({name, value, desc})=><Radio key={value} active={goal===value} name={name} value={value} onClick={onChange}><p>{desc}</p></Radio>)}
                        {errGoal &&<Error err={errGoal}/>}
                        {(goal === 'reduction' || goal === 'muscle-mass') && 
                        <React.Fragment key={value}>
                            <Label>Docelowa masa ciała</Label> 
                            <Input className="form__value" type="number" unit="kg" name="targetWeight" value={targetWeight} onChange={onChange}/> 
                            {errTargetWeight&&<Error err={errTargetWeight}/>}
                        </React.Fragment>}
                    </Column>
                    <BMI className="BMI" bmi={bmi}/>
                </Box>
                <ButtonBox>
                    <Button value="Wstecz" name="back" onClick={back} type="button"/>
                    <Button value="Dalej" name="next" type="submit"/>
                </ButtonBox>
            </form>
        </StyledSecondStage>
    )








    // return( 
    //     <StyledSecondStage active={active}>
    //         <h4 className="goal-header">Cel diety</h4>
    //         <form className="form" onSubmit ={onSubmit}>
    //             <div className="form__option">
    //                 <Radio active={goal==="stable"} name="goal" value="stable" onClick={onChange}><p>Utrzymanie masy ciała</p></Radio>
    //                 <Radio active={goal==="reduction"} name="goal" value="reduction" onClick={onChange}><p>Redukcja masy ciała</p></Radio>
    //                 <Radio active={goal==="muscle-mass"} name="goal" value="muscle-mass" onClick={onChange}><p>Wzrost masy mięśniowej</p></Radio>
    //                 {errGoal &&<p className="errors">{errGoal}</p>}
    //                 {(goal === 'reduction' || goal === 'muscle-mass') && 
    //                 <>
    //                     <Label>Docelowa masa ciała</Label> 
    //                     <Input className="form__value" type="number" unit="kg" name="targetWeight" value={targetWeight} onChange={onChange}/> 
    //                     {errTargetWeight&&<p className="errors">{errTargetWeight}</p>}
    //                 </>}
    //             </div>
    //             <BMI className="BMI" bmi={bmi}/>
    //             <div className="form__buttons buttons ">
    //                 <Button value="Wstecz" name="back" onClick={back} type="button"/>
    //                 <Button value="Dalej" name="next" type="submit"/>
    //             </div>
    //         </form>
    //     </StyledSecondStage>
    // )
}

export default SecondStage;