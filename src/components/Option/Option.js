import React from 'react';
import StyledOption from './Option.styled';

const Option = (props) => {
    return( 
        <StyledOption>
        {props.children}
        </StyledOption>
    )
}

export default Option;