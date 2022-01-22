import React from 'react';
import StyledProgressBar from './ProgressBar.styled';

const ProgressBar = ({completed}) => {
       return(
        <StyledProgressBar completed={completed}>
            <span className="progress"></span>
        </StyledProgressBar>
    )
}


export default ProgressBar;