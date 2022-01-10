import React, {useReducer, useContext, useState} from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './../Parameters/Parameters'
import Activity from './../Activity/Activity';
import {validateData} from './../../validateData'

const FirstStage = () => {

    const init = {
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: ''
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'reset': 
                return init;
            case 'change':
                const {name, value} = action.element;
                return {...state, [name]:value};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const {gender, weight, height, born, activity} = state;
    const [err, setErr] = useState([])

    const handleForm =(e) => {
        e.preventDefault();
        const errors = validateData(state);
        if (errors.length === 0) {

        } else {console.log(errors)}
    }



    return( 
        <StyledFirstStage onSubmit={(e)=> handleForm(e)}>
            <div className="flex-wrapper">
                <Parameters param={state} onChange={e=>dispatch({type:'change', element: e.target })}/>
                <Activity activity={activity}/>
            </div>
            <div className="buttons"> 
                <Button active = {true} value="Dalej" type="submit"/>
            </div>
        </StyledFirstStage>
    )
}

export default FirstStage;