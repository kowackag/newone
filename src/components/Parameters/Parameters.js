import React from 'react';
import StyledParameters from './Parameteres.styled';
import Input from './../Input/Input';
import Label from './../Label/Label';
import Dropdown from './../Dropdown/Dropdown';

const Parameters = (props) => {
    const {gender, weight, height, born} = props.param;
    const {
        gender: errGender,
        weight: errWeight,
        height: errHeight,
        born: errBorn
    } = props.errors;
    
    return( 
        <StyledParameters>
            <Label>Płeć</Label> 
            <Dropdown name="gender" value ={gender} onChange={props.onChange} err={errGender ? true : false}></Dropdown>
            {errGender && <p className="errors">{errGender}</p>}
            <Label>Masa ciała</Label> 
            <Input type="number" unit="kg" name="weight" value={weight} onChange={props.onChange} err={errWeight ? true : false}/>
            {errWeight && <p className="errors">{errWeight}</p>}
            <Label>Wzrost</Label> 
            <Input type="number" unit="cm" name="height" value={height} onChange={props.onChange} err={errHeight ? true : false}/>
            {errHeight && <p className="errors">{errHeight}</p>}
            <Label>Data urodzenia</Label> 
            <Input type="date" name="born" value={born} onChange={props.onChange} err={errBorn ? true : false}/>
            {errBorn && <p className="errors">{errBorn}</p>}
        </StyledParameters>
    )
}

export default Parameters;