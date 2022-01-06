import React from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Dropdown from './../Dropdown/Dropdown';

const FirstStage = () => {
    return( 
        <StyledFirstStage>
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
        </StyledFirstStage>
    )
}

export default FirstStage;