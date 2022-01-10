import React from 'react';
import StyledParameters from './Parameteres.styled';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Dropdown from './../Dropdown/Dropdown';

const Parameters = () => {
    return( 
        <StyledParameters>
            <Label>Płeć</Label> 
            <Dropdown></Dropdown>
            <Label>Masa ciała</Label> 
            <Input type="number" unit="kg"/>
            <Label>Wzrost</Label> 
            <Input type="number" unit="cm"/>
            <Label>Data urodzenia</Label> 
            <Input type="date"/>
        </StyledParameters>
    )
}

export default Parameters;