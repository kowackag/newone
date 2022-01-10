import React from 'react';
import StyledRadio from './Radio.styled';
import Label from './../Label/Label'

const Radio = (props) => {
    return( 
        <StyledRadio> 
            <label>{props.children}</label>
            <input id="radio" type="radio"></input>
        </StyledRadio>
    )
}

export default Radio;