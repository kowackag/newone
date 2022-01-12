import React from 'react';
import StyledOption from './Option.styled';

const Option = (props) => {
    const {name, value, active, onClick} = props;
    return( 
        <StyledOption active={active}>
        {props.children}
        <input name={name} active={active} value={value} type="radio" onClick={onClick}></input>
        </StyledOption>
    )
}

export default Option;