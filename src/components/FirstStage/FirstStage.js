import React from 'react';
import StyledFirstStage from './FirstStage.styled';
import Box from './../Box/Box';
import ButtonBox from './../ButtonBox/ButtonBox';
import Button from './../Button/Button';
import Parameters from './Parameters/Parameters';
import Activity from './Activity/Activity';

const FirstStage = ({state, errors, onChange, onChoose, onSubmit, active}) => {
    return( 
        <StyledFirstStage active={active}>
            <form onSubmit={onSubmit}> 
                <Box>
                    <Parameters param={state} errors={errors} onChange={onChange} onChoose={onChoose}/>
                    <Activity activity={state.activity} error={errors.activity} onClick={onChange}/>
                </Box>
                <ButtonBox> 
                    <Button value="Dalej" type="submit"/>
                </ButtonBox>
            </form>
        </StyledFirstStage>
    )
}

export default FirstStage;