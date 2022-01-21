import React, {useReducer, useContext, useState} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import LastStage from './LastStage/LastStage';
import ResetStyle from '../styled/Reset';
import GlobalStyle from '../styled/Global';
import StyledApp from './../components/App.styled';
import validateData from './../validateData';

const App = () => {
    const init = { 
        gender: '',
        weight: 0,
        height: 0,
        born: '',
        activity: '',
        goal: '',
        targetWeight: 0,
        diet: '',
        lactosy: false,
        gluten: false,
        excluded1: '',           
        excluded2: '',
        // Chciałam zrobić excluded: [] a potem korzystac z destrukturyzacji ale chyba żle zapisywałam zasadę w reducer ???
        userName: '',
        userEmail: '',
        userPhone:'',
    };

    const reducer = (state, action) => {
        const {name, value, checked, type} = action.element;
        console.log(action.element);
        console.log(name.checked);
        console.log(type);
        switch (action.type) {
            case 'reset': 
                return init;
            case 'change':
                let copyValue = type=='checkbox' ? checked : value;
                return {...state, [name]:copyValue};
            case 'add':
                return {...state, [name]:[value]};
            case 'click':
                let copyValue2 = type=='checkbox' ? checked : value;
                return {...state, [name]:copyValue2};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, init);
    const [stage, setStage] = useState(1);
    const [form, setForm] = useState({})
    const [bmi, setBMI] = useState();
    const [err, setErr] = useState({});

    
    // const [ing1,ing2] = state.excluded;

    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    const handleForm =(e) => {
        e.preventDefault();
        const errors = validateData(stage, state);
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            setBMI(bmi);
            setForm(prevState=> {
               return {...prevState, ...state}
            });
            setStage(prev => ++prev); 
            console.log(state);  
            console.log(form);
        } 
    }

    const prevForm = (e) => {
        e.preventDefault();
        setStage(prev => --prev); 
    }

    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <ResetStyle/>
            <GlobalStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage state = {state} active={stage===1} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <SecondStage state={state} active={stage===2} bmi={bmi} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <ThirdStage state={state} active={stage===3} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
                <LastStage state={state} active={stage===4} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={e=>dispatch({type:'change', element: e.target })} onClick={e=>dispatch({type:'change', element: e.target })} errors={err}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
