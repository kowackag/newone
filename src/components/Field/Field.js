import React from 'react';
import StyledField from './Field.styled';

const Field = ({unit, type}) => {
    return( 
        <StyledField type={type} unit={unit}></StyledField>
    )
}

export default Field;