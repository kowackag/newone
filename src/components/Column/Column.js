import React from 'react';
import StyledColumnBox from './Column.styled';

const Column = (props)=> {
    return <StyledColumnBox>{props.children}</StyledColumnBox> 
}

export default Column;