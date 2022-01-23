import React from 'react';
import StyledFirstStage from './FirstStage.styled';
import Button from './../Button/Button';
import Parameters from './Parameters/Parameters'
import Activity from './Activity/Activity';

const FirstStage = ({state, errors, onChange, onSubmit, active}) => {
    return( 
        <StyledFirstStage active={active}>
            <form onSubmit={onSubmit}> 
                <div className="flex-wrapper">
                    <Parameters param={state} errors ={errors} onChange={onChange}/>
                    <Activity activity={state.activity} errors ={errors.activity} onClick={onChange}/>
                </div>
                <div className="buttons"> 
                    <Button value="Dalej" type="submit"/>
                </div>
            </form>
            
        </StyledFirstStage>
    )
}

export default FirstStage;