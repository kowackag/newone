import React from 'react';
import StyledLastStage from './LastStage.styled';
import Subtitle from './../Subtitle/Subtitle';
import ButtonBox from './../ButtonBox/ButtonBox';
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

    const fields = [
        {label: 'Imię i Nazwisko:', type: 'text', name: 'userName', value: userName, err: errUserName},
        {label: 'Adres email:', type: 'email', name: 'userEmail', value: userEmail , err: errUserEmail},
        {label: 'Telefon:', type: 'text', name: 'userPhone', value: userPhone, err: errUserPhone},
        {label: 'Uwagi:', type: 'text', name: 'userInfo', value: userInfo}
    ]

    return( 
        <StyledLastStage active={active}>
            <Subtitle>Proszę o podanie danych kontaktowych.</Subtitle>
            <form className="form" onSubmit ={onSubmit}>
                <div className ="form__content"> 
                    {fields.map(({label, name, type, value, err}) => <>
                        <Label>{label}</Label> 
                        <Input className="form__value" type={type} name={name} value={value} onChange={onChange}/>
                        {err && <p className="errors">{err}</p>}
                    </>)}
                </div>
                <ButtonBox>
                    <Button value="Wstecz" name="back" onClick={back} type="button"/>
                    <Button value="Wyślij" name="next" type="submit"/>
                </ButtonBox>
            </form>
        </StyledLastStage>
    )
}

export default LastStage;