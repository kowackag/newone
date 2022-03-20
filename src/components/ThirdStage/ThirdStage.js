import React from 'react';
import StyledThirdStage from './ThirdStage.styled';
import Subtitle from './../Subtitle/Subtitle';
import Radio from './../Radio/Radio';
import Column from './../Column/Column';
import ButtonBox from './../ButtonBox/ButtonBox';
import Button from './../Button/Button';
import Checkbox from './../Checkbox/Checkbox';
import Label from './../Label/Label';
import Search from './../Search/Search';
import Error from './../Error/Error'

const ThirdStage = ({state, active, prod, back, onSubmit, onChange, onChoose, errors}) => {
    const {diet, excluded1, excluded2} = state;
    const {diet: errDiet} = errors;

    const radioFields = [
        {name: 'diet', value: 'fit', label: 'Dieta Fit', desc: 'Odchudzająca. Skuteczna dla osób chcących stracić zbędne kilogramy.'},
        {name: 'diet', value: 'vegetarian', label: 'Dieta Wegetariańska', desc: 'Pyszna dieta wegetariańska zgodna z zaleceniami światowej organizacji zdrowia.'},
        {name: 'diet', value: 'keto', label: 'Dieta ketogeniczna', desc: 'Zwiększenie ilości tłuszczu, ograniczenie węglowodanów oraz umiarkowane spożycie białka.'},
        {name: 'diet', value: 'high-protein', label: 'Dieta wysokobiałkowa', desc: 'Urozmaicona dieta, zapewniająca uczucie sytości, dzięki daniom o dużej zawartości białka.'},
    ];
    const searchFields = [
        {name:'excluded1', value: excluded1, label: 'Składnik 1'},
        {name:'excluded2', value: excluded2, label: 'Składnik 2'},
    ];

    return (
       <StyledThirdStage active={active}>
           <form className="form" onSubmit = {onSubmit} >
                <Column>
                    {radioFields.map(({name, value, label, desc}) => <Radio key={value} name={name} value={value} onClick={onChange} active={diet===value}><p className ="radio__name"> {label}</p><p className="radio__description">{desc}</p></Radio>)}
                    <Error err={errDiet}/>
                </Column>
                <Column>
                    <div className="box"> 
                        <Label>Dieta bezglutenowa?</Label>
                        <Checkbox name="gluten" onClick={onChange}/>
                    </div>
                    <div className="box"> 
                        <Label>Dieta bez laktozy?</Label>
                        <Checkbox name="lactosy" onClick={onChange}/>
                    </div>
                    <Subtitle>Wykluczenia z diety:</Subtitle>
                    {searchFields.map(({name, value, label}) => <React.Fragment key={name}><Label>{label}</Label><Search items={prod} name={name} value={value} onChange={onChange} onChoose={onChoose} isMutable={true}/></React.Fragment>)}
                </Column>
                <ButtonBox>
                    <Button value="Wstecz" name="back" onClick={back} type="button"/>
                    <Button value="Dalej" name="next" type="submit"/>
                </ButtonBox>
            </form>
       </StyledThirdStage>
    )
}

export default ThirdStage;