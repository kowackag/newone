import React, {useState} from 'react';
import StyledSearch from './Search.styled';
import {v4 as uuid} from 'uuid';

const Search = (props) => {
    const {name, value, prod, onChoose} = props;
    const [inputValue, setInputValue] = useState(value);
    const [isActive, setIsActive] = useState(false);

    const getProduct = (e) => {
        e.preventDefault();
        const value = e.target.innerText;
        setInputValue(value);
        setIsActive(false);
        onChoose(e);
    }

    return(
        <StyledSearch active={isActive} >
            <input className="form__value" id={name} type="text" value={inputValue} name={name} onClick={()=>setIsActive(true)} readOnly/>
            <label className="form__label" htmlFor={name}></label> 
            <ul className="list">
                {prod.map(el=><li className="ingred" key={uuid()} onClick={getProduct} value={el} name={name}>{el}</li>)} 
            </ul>
        </StyledSearch>
    )
}


export default Search;



