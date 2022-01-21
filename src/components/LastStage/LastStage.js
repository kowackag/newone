import React from 'react';
import StyledLastStage from './LastStage.styled';
import Button from './../Button/Button';
import Input from './../Input/Input';
import Label from './../Label/Label';

const LastStage = ({state, active, back, onSubmit, onChange, errors}) => {
    const {userName, userEmail, userPhone, userInfo} = state;
    const { 
        userName: errUserName, 
        userEmail: errUserEmail,
        userPhone: errUserPhone,
    } = errors;

    return( 
        <StyledLastStage active={active}>
            <h4 className="goal-header">Proszę o podanie danych kontaktowych</h4>
            <form className="form" onSubmit ={onSubmit}>
                <div className ="form__content"> 
                    <Label>Imię i Nazwisko:</Label> 
                    <Input className="form__value" type="text" name="userName" value={userName} onChange={onChange}/>
                    {errUserName && <p className="errors">{errUserName}</p>}
                    <Label>Adres email:</Label> 
                    <Input className="form__value" type="email" name="userEmail" value={userEmail} onChange={onChange}/>
                    {errUserEmail && <p className="errors">{errUserEmail}</p>}
                    <Label>Telefon:</Label> 
                    <Input className="form__value" type="text" name="userPhone" value={userPhone} onChange={onChange}/>
                    {errUserPhone && <p className="errors">{errUserPhone}</p>}
                    <Label>Uwagi:</Label> 
                    <Input className="form__value" type="text" name="userInfo" value={userInfo} onChange={onChange}/>
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