import React from 'react';
import StyledDropdown from './Dropdown.styled.js';

const Input = (props) => {
    const {type, unit} = props;
    return( 
        <StyledDropdown unit={unit}>
            <option></option>
            <option>kobieta</option>
            <option>mężczyzna</option>
        </StyledDropdown>
    )
}

export default Input;