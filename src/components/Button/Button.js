import React from 'react';
import StyledButton from './Button.styled';

const Button = ({type, value, onClick}) => {
    return( 
        <StyledButton readOnly type ={type} value ={value} onClick={onClick}/>
    )
}

export default Button;