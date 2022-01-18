import React, {useReducer, useState} from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './../Parameters/Parameters'
import Activity from './../Activity/Activity';
import {validateDataFirstStage} from './../../validateData';
import {v4 as uuid} from 'uuid';

const FirstStage = (props) => {
    const init = {
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: ''
    }

    const reducer = (state, action) => {
        const {name, value} = action.element;
        switch (action.type) {
            case 'reset': 
                return init;
            case 'change':
                return {...state, [name]:value};
            case 'click':
                return {...state, [name]:value};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {activity} = state;
    const [err, setErr] = useState({})

    const handleForm =(e) => {
        e.preventDefault();
        const errors = validateDataFirstStage(state);
        if (errors===false) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            const {setStage, setBMI, setForm} = props; 
            setBMI(bmi);
            setForm(prevState=> {
               return {...prevState, ...state}
            });
            setStage('second-stage');      
        } 
        // const copyErrors = errors.map(error=>{
        //     return {text: error, id: uuid()}});
        setErr(prevState => {
            return {...prevState, ...errors}
        });
        console.log(err);
    }

    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    return( 
        <StyledFirstStage active={props.active}>
            <form onSubmit={(e)=> handleForm(e)}> 
                <div className="flex-wrapper">
                    <Parameters param={state} errors ={err} onChange={e=>dispatch({type:'change', element: e.target })}/>
                    <Activity activity={activity} errors ={err.activity} onClick={e=>dispatch({type:'click', element: e.target})}/>
                </div>
                <div className="buttons"> 
                    <Button active = {true} value="Dalej" type="submit"/>
                </div>
            </form>
            {/* { 
                err.length > 0 && <> 
                <section className="errors">
                    <h4 className="errors__title">Wprowadzono błędne dane:</h4>
                    <ul>{err.map(({text, id})=><li className="errors__item" key={id}>{text}</li>)}</ul> 
                </section></>} */}
        </StyledFirstStage>
    )
}

export default FirstStage;