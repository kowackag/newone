import React, { useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import LastStage from './LastStage/LastStage';
import Complete from './Complete/Complete';
import ProgressBar from './ProgresBar/ProgressBar';
import validateData from './validateData';
import DataAPI from './DataAPI';
import {useHandler} from './reducer';

import themeSettings from '../styled/theme';
import ResetStyle from '../styled/Reset';
import GlobalStyle from '../styled/Global';
import StyledApp from './../components/App.styled';

const App = () => {
    const [state, dispatch] = useHandler();
    const [stage, setStage] = useState(1);
    const [bmi, setBMI] = useState();
    const [err, setErr] = useState({});
    const [products, setProducts] = useState([]);
    const db = new DataAPI();
    const [addOrdersAPI, loadProductsAPI] = db;

    useEffect(() => {loadProductsAPI().then(item=>item).then(data=>setProducts(data))},[]);

    const countBMI = (weight, height) => {
        const bmi = (weight/Math.pow(height,2)).toFixed(1);
        return bmi;
    }

    const handleForm = (e) =>  {
        e.preventDefault();
        const errors = validateData(stage, state);
        setErr({...errors});
        if (Object.keys(errors).length === 0) {
            const {weight, height} = state;
            const bmi = countBMI(Number(weight), Number(height)/100);
            setBMI(bmi);
            if (stage === 4) {
                addOrdersAPI(state);
            } 
            setStage(prev => ++prev); 
        } 
    }
    
    const prevForm = (e) => {
        e.preventDefault();
        setStage(prev => --prev); 
    }

    const reset = (e) => {
        e.preventDefault();
        setStage(1); 
        dispatch({type:'reset'});
    }

    const getProgress = (stage) => {
        const progress = 25 * (stage-1);
        return progress;
    }
    
    const changeValue = e => {
        dispatch({type:'change', element: e.target })
    }

    return (
        <ThemeProvider theme = {themeSettings.variant.light}> 
            <ResetStyle/>
            <GlobalStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage state={state} active={stage===1} onSubmit={(e)=> handleForm(e)} onChange={changeValue} onChoose={e=>dispatch({type:'choose', element: e.target })} errors={err}/>
                <SecondStage state={state} active={stage===2} bmi={bmi} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={changeValue} errors={err}/>
                <ThirdStage state={state} active={stage===3} prod={products} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={changeValue} errors={err} onChoose={e=>dispatch({type:'choose', element: e.target })}/>
                <LastStage state={state} active={stage===4} back={prevForm} onSubmit={(e)=> handleForm(e)} onChange={changeValue} errors={err}/>
                <Complete active={stage===5} reset={reset}/> 
                <ProgressBar progress={getProgress(stage)} ></ProgressBar>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
