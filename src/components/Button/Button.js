import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
    return( 
        <StyledButton type ={props.type} value = {props.value}/>
    )
}

export default Button;