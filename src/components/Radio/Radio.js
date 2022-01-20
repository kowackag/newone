import React from 'react';
import StyledRadio from './Radio.styled';

const Radio = (props) => {
    const {name, value, active, onClick} = props;
    return( 
        <StyledRadio active={active}> 
            {props.children}
            <input name={name} value={value} type="radio" onClick={onClick}></input>
        </StyledRadio>
    )
}

export default Radio;