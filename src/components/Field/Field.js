import React from 'react';
import StyledField from './Field.styled';

const Field = (props) => {
    const {unit, type} = props;
    return( 
        <StyledField type={type} unit={unit}></StyledField>
    )
}

export default Field;