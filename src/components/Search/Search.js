import React, {useState} from 'react';
import StyledSearch from './Search.styled';
import {v4 as uuid} from 'uuid';

const Search = (props) => {
    const {name, value, prod, onChoose, onChange} = props;
    const [inputValue, setInputValue] = useState();
    const [isActive, setIsActive] = useState(false);

    const getProduct = (e) => {
        e.preventDefault();
        const value = e.target.innerText;
        setInputValue(value);
        onChoose(e)
        setIsActive(false);
    }

    return(
        <StyledSearch active={isActive} onChange={onChange}>
            <input className="form__value" value={value || inputValue} name={name} onClick={() => setIsActive(true)} onChange={(e) => setInputValue(e.target.value)}/>
            <label className="form__label"></label> 
            <ul className="list">
                {prod.filter(el=>el.includes(value)).map(el=><li className="ingred" key={uuid()} onClick={getProduct} value={el} name={name}>{el}</li>)} 
            </ul>
        </StyledSearch>
    )
}


export default Search;



