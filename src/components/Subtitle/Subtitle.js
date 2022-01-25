import React from 'react';
import StyledSubtitle from './Subtitle.styled';

const Subtitle = (props) => {
    return(
        <StyledSubtitle>{props.children}</StyledSubtitle>
    )
}

export default Subtitle;
