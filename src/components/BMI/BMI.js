import React from 'react';
import StyledBMI from './BMI.styled';

const BMI = ({className, bmi}) => {
    
    return( 
        <StyledBMI className={className}>
            <h4 className="title">Twój wskaźnik masy ciała wynosi:</h4>
            <p className="bmi">{bmi}</p>
            <p className="info">Twoje BMI wskazuje na:</p>
            <p className="description">nadwaga</p>
        </StyledBMI>
    )
}

export default BMI;