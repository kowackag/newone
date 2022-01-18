import React, {useReducer, useState} from 'react';
import StyledSecondStage from './SecondStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Option from './../Option/Option';
import Radio from './../Radio/Radio'
import BMI from './../BMI/BMI';
import {validateDataSecondStage} from './../../validateData';
import {v4 as uuid} from 'uuid';

const SecondStage = (props) => {
    const init = {
        goal: '',
        weight: '',
    }

    const reducer = (state, action) => {
        const {name, value} = action.element;
        switch (action.type) {
            case 'reset':
                return init;
            case 'change': 
                return {...state, [name]:value};
            case 'click':
                return {...state, [name]:value}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {goal, weight} = state;
    const [err, setErr] = useState([]);
   
    const handleForm = (e) => {
        e.preventDefault();
        const errors = validateDataSecondStage(state);
        if (errors.length === 0) {
            const {setStage, setForm} = props; 
            setForm(prevState=> {
                return {...prevState, ...state}
            });
            setStage('third-stage');      } 
         const copyErrors = errors.map(error=>{
             return {text: error, id: uuid()}});
         setErr(copyErrors);
    }

    const backForm = (e) => {
        e.preventDefault();
        const {setStage} = props; 
        setStage('first-stage'); 
    }

    return( 
        <StyledSecondStage active={props.active}>
            <h4 className="goal-header">Cel diety</h4>
            <form className="form" onSubmit = {(e)=> handleForm(e)} >
                <div className="form__option">
                    <Radio active={goal==="stable"} name="goal" value="stable" onClick={e=>dispatch({type:'click', element: e.target})}><p>Utrzymanie masy ciała</p></Radio>
                    <Radio active={goal==="reduction"}name="goal" value="reduction" onClick={e=>dispatch({type:'click', element: e.target})}><p>Redukcja masy ciała</p></Radio>
                    <Radio active={goal==="muscle-mass"} name="goal" value="muscle-mass" onClick={e=>dispatch({type:'click', element: e.target})}><p>Wzrost masy mięśniowej</p></Radio>
                    <Label>Docelowa masa ciała</Label> 
                    <Input type="number" unit="kg" name="weight" value={weight} onChange={e=>dispatch({type:'change', element: e.target})}/>
                </div>
                <BMI className="BMI" bmi={props.bmi}/>
                <div className="form__buttons buttons ">
                    <Button value="Wstecz" name="back" />
                    <Button value="Dalej" name="next" type="submit"/>
                </div>
            </form>{err.length > 0 && <>
                <section className="errors">
                    <h4 className="errors__title">Wprowadzono błędne dane:</h4>
                    <ul>{err.map(({text, id})=><li className="errors__item" key={id}>{text}</li>)}</ul> 
                </section></>}
        </StyledSecondStage>
    )
}

export default SecondStage;