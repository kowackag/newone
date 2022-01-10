import React from 'react';
import StyledDropdown from './Dropdown.styled.js';

const Input = (props) => {
    const {type, unit, name, onChange} = props;
    return( 
        <StyledDropdown unit={unit} name={name} onChange={onChange}>
            <option></option>
            <option>kobieta</option>
            <option>mężczyzna</option>
        </StyledDropdown>
    )
}

export default Input;