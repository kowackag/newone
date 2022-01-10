import React from 'react';
import StyledParameters from './Parameteres.styled';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Dropdown from './../Dropdown/Dropdown';

const Parameters = (props) => {
    const {gender, weight, height, born} = props.param;
    return( 
        <StyledParameters>
            <Label>Płeć</Label> 
            <Dropdown name="gender" value ={gender} onChange={props.onChange}></Dropdown>
            <Label>Masa ciała</Label> 
            <Input type="number" unit="kg" name="weight" value={weight} onChange={props.onChange}/>
            <Label>Wzrost</Label> 
            <Input type="number" unit="cm" name="height" value={height} onChange={props.onChange}/>
            <Label>Data urodzenia</Label> 
            <Input type="date" name="born" value={born} onChange={props.onChange}/>
        </StyledParameters>
    )
}

export default Parameters;