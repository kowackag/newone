import React from 'react';
import StyledLastStage from './LastStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';

const LastStage = ({state, active, back, onSubmit, onChange, onClick, errors}) => {
   
    const {userPhone, userName, userEmail} = state;

    return( 
        <StyledLastStage active={active}>
            <h4 className="goal-header">Proszę o podanie danych kontaktowych</h4>
            <form className="form" onSubmit ={onSubmit}>
                <div className ="form__content"> 
                    <Label>Imię i Nazwisko:</Label> 
                    <Input className="form__value" type="text" name="user-name" value={userName} onChange={onChange}/>
                    <Label>Adres email:</Label> 
                    <Input className="form__value" type="email" name="user-mail" value={userEmail} onChange={onChange}/>
                    <Label>Telefon:</Label> 
                    <Input className="form__value" type="text" name="user-phone" value={userPhone} onChange={onChange}/>
                    <Label>Uwagi:</Label> 
                    <Input className="form__value" type="text" name="user-phone" value={userPhone} onChange={onChange}/>
                </div>
                <div className="form__buttons buttons ">
                    <Button value="Wstecz" name="back" onClick={back} type="button"/>
                    <Button value="Wyślij" name="next" type="submit"/>
                </div>
            </form>
        </StyledLastStage>
    )
}

export default LastStage;