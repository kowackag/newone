import React from 'react';
import StyledLabel from './Label.styled';



const Label = (props) => {
    return( 
        <StyledLabel className={props.className}>
          {props.children}
        </StyledLabel>
    )
}

export default Label;