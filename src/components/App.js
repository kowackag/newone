import React, {useReducer, useContext, useState} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import ResetStyle from '../styled/Reset';
import GlobalStyle from '../styled/Global';
import StyledApp from './../components/App.styled';
import {validateDataFirstStage} from './../validateData';

const App = (props) => {
    const init = { 
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: ''
    };

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
    const [stage, setStage] = useState('first-stage');
    const [form, setForm] = useState({})
    const [bmi, setBMI] = useState();
    const [err, setErr] = useState({})


    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    const handleForm =(e) => {
        e.preventDefault();
        const errors = validateDataFirstStage(state);
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            setBMI(bmi);
            setForm(prevState=> {
               return {...prevState, ...state}
            });
            setStage('second-stage');      
        } 
    }

    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <ResetStyle/>
            <GlobalStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage state = {state} name="first-stage" active={"first-stage"===stage} setStage={setStage} setBMI={setBMI} setForm={setForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <SecondStage state={state} name="second-stage" active={"second-stage"===stage} setStage={setStage} setForm={setForm} bmi={bmi}/>
                <ThirdStage name="third-stage" active={"third-stage"===stage} setStage={setStage} setForm={setForm} bmi={bmi}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
