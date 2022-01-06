import React from 'react';
import Button from './Button/Button';
import Field from './Field/Field'
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme'

const style = {
    margin:'20px',
    padding: '100px',
    backgroundColor: '#eef0fb',
    color: '#FF5134',
    fontWeight: '400',
}
const style2 = {
    color: '#FF5134',
}

const App = () => {
    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            
            <div style ={style}> 
                <h2 style = {style2}>Konfigurator diety</h2>
                <div><label>Masa</label> 
                <Field type="number" unit="kg"/></div>
                <div> <label>Wzrost</label> 
                <Field unit="cm"/></div>
                <div> <label>Data urodzenia</label> 
                <Field type="date" unit="cm"/></div>
                <Button active = {false}>Cofnij</Button>
                <Button active = {true}>Dalej</Button>
            </div>
        </ThemeProvider>
    )
}

export default App;
