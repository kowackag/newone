import React from 'react';
import StyledBox from './Box.styled';

const Box = ({children})=> {
    return <StyledBox>{children}</StyledBox> 
}

export default Box;