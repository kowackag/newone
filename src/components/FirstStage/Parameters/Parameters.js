import React from 'react';
import StyledParameters from './Parameteres.styled';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import Dropdown from '../../Dropdown/Dropdown';
import Error from '../../Error/Error';
import {v4 as uuid} from 'uuid'

const Parameters = (props) => {
    const {gender, weight, height, born} = props.param;
    const {
        gender: errGender,
        weight: errWeight,
        height: errHeight,
        born: errBorn
    } = props.errors;

    const fields =[
        {label: 'Masa ciała', type: 'number', unit: 'kg', name: 'weight', value: weight , err: errWeight},
        {label: 'Wzrost', type: 'number', unit: 'kg', name: 'height', value: height , err: errHeight},
        {label: 'Data urodzenia', type: 'date', name: 'born', value: born, err: errBorn},
    ]
   
    return( 
        <StyledParameters>
            <Label>Płeć</Label> 
            <Dropdown name="gender" value ={gender} onChange={props.onChange} err={errGender ? true : false}></Dropdown>
            {errGender && <Error err={errGender}/>}
            {fields.map(({label, type, unit, name, err})=><React.Fragment key={uuid()}><Label >{label}</Label><Input className="form__value" type={type} unit={unit} name={name} value={weight} onChange={props.onChange}/>{err && <Error err={err}/>}</React.Fragment>)}
        </StyledParameters>
    )
}

export default Parameters;