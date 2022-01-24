import React from 'react';
import StyledLastStage from './LastStage.styled';
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
            <h4 className="goal-header">Proszę o podanie danych kontaktowych</h4>
            <form className="form" onSubmit ={onSubmit}>
                <div className ="form__content"> 
                    {fields.map(({label, name, type, value, err}) => <>
                        <Label>{label}</Label> 
                        <Input className="form__value" type={type} name={name} value={value} onChange={onChange}/>
                        {err && <p className="errors">{err}</p>}
                    </>)}
{/* 


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
                    <Input className="form__value" type="text" name="userInfo" value={userInfo} onChange={onChange}/> */}
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