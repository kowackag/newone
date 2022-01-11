import React, {useReducer, useContext, useState} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ResetStyle from './../styled/Resel';
import StyledApp from './../components/App.styled';

const App = () => {
    const [stage, setStage] = useState('first-stage');
    console.log("first-stage"===stage);
    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <StyledApp className="diet-app"> 
                <ResetStyle/>
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage name="first-stage" active={"first-stage"===stage} setStage={setStage}/>
                <SecondStage name="second-stage" active={"second-stage"===stage} setStage={setStage}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
