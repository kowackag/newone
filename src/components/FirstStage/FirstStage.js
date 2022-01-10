import React from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './../Parameters/Parameters'
import Activity from './../Activity/Activity'

const FirstStage = () => {
    return( 
        <StyledFirstStage>
            <div className="flex-wrapper">
                <Parameters/>
                <Activity/>
            </div>
            <div className="buttons"> 
                <Button active = {true}>Dalej</Button>
            </div>
        </StyledFirstStage>
    )
}

export default FirstStage;