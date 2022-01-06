import React from 'react';
import StyledBMI from './BMI.styled';

const BMI = () => {
    return( 
        <StyledBMI>
            <h3 className="title">Twój wskaźnik masy ciała wynosi:</h3>
            <p className="bmi">33,5</p>
            <p className="info">Twoje BMI wskazuje na:</p>
            <p className="description">nadwaga</p>
        </StyledBMI>
    )
}

export default BMI;