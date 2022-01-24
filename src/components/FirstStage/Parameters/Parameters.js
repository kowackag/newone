import React from 'react';
import StyledParameters from './Parameteres.styled';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import Dropdown from '../../Dropdown/Dropdown';
import Error from '../../Error/Error';
import Search from '../../Search/Search';

const Parameters = (props) => {
    const {gender, weight, height, born} = props.param;
    console.log(gender);
    const {
        gender: errGender,
        weight: errWeight,
        height: errHeight,
        born: errBorn
    } = props.errors;

    const fields =[
        {label: 'Masa ciała', type: 'number', unit: 'kg', name: 'weight', value: weight , err: errWeight},
        {label: 'Wzrost', type: 'number', unit: 'cm', name: 'height', value: height , err: errHeight},
        {label: 'Data urodzenia', type: 'date', name: 'born', value: born, err: errBorn},
    ]

    return( 
        <StyledParameters>
            <Label>Płeć</Label> 
            <Search className="form__value" prod={['kobieta', 'mężczyzna']} name="gender" value ={gender} onChange={props.onChange} onChoose={props.onChoose}/>
            {errGender && <Error err={errGender}/>}
            {fields.map(({label, type, unit, name, value, err})=><React.Fragment key={name}><Label>{label}</Label><Input className="form__value" type={type} unit={unit} name={name} value={value} onChange={props.onChange}/>{err && <Error err={err}/>}</React.Fragment>)}
        </StyledParameters>
    )
}

export default Parameters;