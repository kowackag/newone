import React from 'react';
import StyledInput from './Input.styled';

const Input = (props) => {
    const {type, unit} = props;
    return( 
        <StyledInput unit={unit}>
            <input type={type}/>
            {unit ? <span>{unit}</span> : null}
        </StyledInput>
    )
}

export default Input;