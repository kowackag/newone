import React, {useReducer, useState} from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './Parameters/Parameters'
import Activity from './Activity/Activity';
import {validateDataFirstStage} from './../../validateData';

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
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            const {setStage, setBMI, setForm} = props; 
            setBMI(bmi);
            setForm(prevState=> {
               return {...prevState, ...state}
            });
            setStage('second-stage');      
        } 
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
        </StyledFirstStage>
    )
}

export default FirstStage;