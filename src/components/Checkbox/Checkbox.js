import React from 'react';
import StyledCheckbox from './Checkbox.styled';


const Checkbox = () => {
    return( 
        <StyledCheckbox>
            <Label></Label>
            <input type="checkbox" value="" checked/>
        </StyledCheckbox>
    )
}

export default Checkbox;