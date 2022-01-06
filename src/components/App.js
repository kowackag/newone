import React from 'react';
import Button from './Button/Button';
import Field from './Field/Field';
import Input from './Input/Input';
import Label from './Label/Label';
import Dropdown from './Dropdown/Dropdown';
import BMI from './BMI/BMI'
import { ThemeProvider} from 'styled-components';
import themeSettings from './theme';

const style = {
    margin:'20px',
    padding: '100px',
    backgroundColor: '#eef0fb',
    color: '#420caa',
    fontWeight: '600',
}
const style2 = {
    color: '#d81bb8',
}

const App = () => {
    return (
        <ThemeProvider theme ={themeSettings.variant.light}> 
            <section className="FirstStage" style ={style}> 
                <h2 style = {style2}>Konfigurator diety</h2>

                <form> 
                    <div> 
                        <Label>Płeć</Label> 
                        <Dropdown></Dropdown>
                        <Label>Masa ciała</Label> 
                        <Input type="number" unit="kg"/>
                        <Label>Wzrost</Label> 
                        <Input type="number" unit="cm"/>
                        <Label>Data urodzenia</Label> 
                        <Input type="date"/>
                        <div>
                            <Button active = {false}>Cofnij</Button>
                            <Button active = {true}>Dalej</Button>
                        </div>
                    </div>
                </form>
                
            </section>
        </ThemeProvider>
    )
}

export default App;
