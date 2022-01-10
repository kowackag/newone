import React from 'react';
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';
import FirstStage from './FirstStage/FirstStage';
import SecondStage from './SecondStage/SecondStage';
import ResetStyle from './../styled/Resel';

const style = {
    margin:'20px',
    padding: '100px',
    backgroundColor: '#eef0fb',
}

const style2 = {
    color: '#d81bb8',
}

const App = () => {
    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <section className="FirstStage" style ={style}> 
                <ResetStyle/>
                <h2 style = {style2}>Konfigurator diety</h2>
                <FirstStage active={true}/>
                <SecondStage active={false}/>
                
            </section>
        </ThemeProvider>
    )
}

export default App;
