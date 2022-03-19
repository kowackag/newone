import React from 'react';
import StyledColumnBox from './Column.styled';

const Column = ({children})=> {
    return <StyledColumnBox>{children}</StyledColumnBox> 
}

export default Column;