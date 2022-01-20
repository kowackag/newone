import React from 'react';
import StyledButton from './Button.styled';

const Button = (props) => {
    return( 
        <StyledButton readOnly type ={props.type} value = {props.value} onClick={props.onClick}/>
    )
}

export default Button;