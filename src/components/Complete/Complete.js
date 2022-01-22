import React from 'react';
import StyledComplete from './Complete.styled';
import Button from './../Button/Button';

const Complete = ({active, reset}) => {
    
    return( 
        <StyledComplete active={active}>
            <p className="info">Formularz został poprawnie wysłany. </p>
            <p className ="thanks">Dziękujemy za skorzystanie z naszej oferty</p>
            <div className="form__buttons buttons ">
                <Button value="Uzupełnij ponownie" onClick={reset} type="button"/>
            </div>
        </StyledComplete>
    )
}

export default Complete;