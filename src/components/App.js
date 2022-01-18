import React, {useReducer, useContext, useState} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ThirdStage from './ThirdStage/ThirdStage';
import ResetStyle from './../styled/Resel';
import StyledApp from './../components/App.styled';

const App = () => {
    const init = {
        firstStage: {},
        secondStage: {},
        thirdStage: {},
        personal: {}
    }

    const [stage, setStage] = useState('first-stage');
    const [form, setForm] = useState({})
    const [bmi, setBMI] = useState();
    console.log('form');
    console.log(form);
    return (
        
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <ResetStyle/>
            <StyledApp className="diet-app"> 
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage name="first-stage" active={"first-stage"===stage} setStage={setStage} setBMI={setBMI} setForm={setForm}/>
                <SecondStage name="second-stage" active={"second-stage"===stage} setStage={setStage} setForm={setForm} bmi={bmi}/>
                <ThirdStage name="third-stage" active={"third-stage"===stage} setStage={setStage} setForm={setForm} bmi={bmi}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
