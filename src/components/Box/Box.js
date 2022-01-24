import React from 'react';
import StyledBox from './Box.styled';

const Box = (props)=> {
    return <StyledBox>{props.children}</StyledBox> 
}

export default Box;