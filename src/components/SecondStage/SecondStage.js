import React from 'react';
import StyledSecondStage from './SecondStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Option from './../Option/Option';
import BMI from './../BMI/BMI';

const SecondStage = (props) => {
    return( 
        <StyledSecondStage active={props.active}>
            <div className="flex-wrapper">
                <div>
                    <h4>Cel diety</h4>
                    <Option active = {false}>Utrzymanie masy ciała</Option>
                    <Option active = {false}>Redukcja masy ciała</Option>
                    <Option active = {false}>Wzrost masy mięśniowej</Option>
                    <Label>Docelowa masa ciała</Label> 
                    <Input type="number" unit="kg"/>
                </div>
                <BMI/>
            </div>
            <div className="buttons">
                    <Button active = {false}>Cofnij</Button>
                    <Button active = {true}>Dalej</Button>
            </div>
        </StyledSecondStage>
    )
}

export default SecondStage;