import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {type, unit, value, name, onChange} = props;
    return( 
        <StyledInput unit={unit}>
            <input type={type} name={name} value={value} onChange={onChange}/>
            {unit ? <span>{unit}</span> : null}
        </StyledInput>
    )
}

export default Input;