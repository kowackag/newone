import React, {useReducer, useContext, useState} from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './../Parameters/Parameters'
import Activity from './../Activity/Activity';
import {validateData} from './../../validateData';
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
    const [err, setErr] = useState([])

    const handleForm =(e) => {
        e.preventDefault();
        console.log(state);
        const errors = validateData(state);
        if (errors.length === 0) {
           const {setStage} = props; 
           setStage('second-stage');      } 
        const copyErrors = errors.map(error=>{
            return {text: error, id: uuid()}});
        setErr(copyErrors);
    }

    return( 
        <StyledFirstStage active={props.active}>
            <form onSubmit={(e)=> handleForm(e)}> 
                <div className="flex-wrapper">
                    <Parameters param={state} onChange={e=>dispatch({type:'change', element: e.target })}/>
                    <Activity activity={activity} onClick={e=>dispatch({type:'click', element: e.target})}/>
                </div>
                <div className="buttons"> 
                    <Button active = {true} value="Dalej" type="submit"/>
                </div>
            </form>{
                err.length > 0 && <> 
                <section className="errors">
                    <h4 className="errors__title">Wprowadzono błędne dane:</h4>
                    <ul>{err.map(({text, id})=><li className="errors__item" key={id}>{text}</li>)}</ul> 
                </section></>}
        </StyledFirstStage>
    )
}

export default FirstStage;