import React from 'react';
import StyledBMI from './BMI.styled';

const BMI = ({className, bmi}) => {
    
   const getDescription = (bmi) =>  {
        if (bmi<16) return 'wygłodzenie';
        if (bmi>=16 && bmi<16.9) return 'wychudzenie';
        if (bmi>=17 && bmi<18.5) return 'niedowaga';
        if (bmi>=18.5 && bmi<24.9) return 'waga prawidłowa';
        if (bmi>=25 && bmi<29.9) return 'nadwaga';
        if (bmi>=30 && bmi<34.9) return 'otyłość I stopnia';
        if (bmi>=35 && bmi<39.9) return 'otyłość II stopnia';
        if (bmi>40) return 'otyłość III stopnia';
   }

    return( 
        <StyledBMI className={className}>
            <h4 className="bmi-title">Twój wskaźnik masy ciała wynosi:</h4>
            <p className="bmi-value">{bmi}</p>
            <p>Twoje BMI wskazuje na:</p>
            <p className="bmi-description">{getDescription(bmi)}</p>
        </StyledBMI>
    )
}

export default BMI;