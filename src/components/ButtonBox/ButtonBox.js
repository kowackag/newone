import React from 'react';
import StyledButtonBox from './ButtonBox.styled';

const ButtonBox = (props)=> {
    return <StyledButtonBox>{props.children}</StyledButtonBox> 
}

export default ButtonBox;