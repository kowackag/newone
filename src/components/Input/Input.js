import React from 'react';
import StyledInput from './Input.styled';

const Input = ({className, type, unit, value, name, onChange, title}) => {
    return( 
        <StyledInput unit={unit}>
            <input className={className} type={type} name={name} title={title} value={value || ''} onChange={onChange}/>
            {unit ? <span className="form__unit">{unit}</span> : null}
        </StyledInput>
    )
}

export default Input;