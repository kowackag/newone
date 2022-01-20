import React from 'react';
import StyledCheckbox from './Checkbox.styled';

const Checkbox = (props) => {
    const {name, onClick} = props;
    
    return( 
        <StyledCheckbox checked={true}>
            <input id={name} type="checkbox" name={name} onClick={onClick}/>
            <label htmlFor={name}/>
        </StyledCheckbox>
    )
}

export default Checkbox;