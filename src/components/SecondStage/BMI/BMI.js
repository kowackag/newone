import React from 'react';
import StyledBMI from './BMI.styled';

const BMI = ({className, bmi}) => {
    
    return( 
        <StyledBMI className={className}>
            <h4 className="bmi-title">Twój wskaźnik masy ciała wynosi:</h4>
            <p className="bmi-value">{bmi}</p>
            <p>Twoje BMI wskazuje na:</p>
            <p className="bmi-description">nadwaga</p>
        </StyledBMI>
    )
}

export default BMI;