import React, {useReducer, useContext, useState} from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ResetStyle from './../styled/Resel';
import StyledApp from './../components/App.styled';

const App = () => {
    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <StyledApp className="diet-app"> 
                <ResetStyle/>
                <h2 className="diet-app__title">Konfigurator diety</h2>
                <FirstStage active={true}/>
                <SecondStage active={false}/>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App;
