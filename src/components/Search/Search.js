import React, {useState} from 'react';
import StyledSearch from './Search.styled';

const Search = (props) => {
    const {name, value, items, onChoose, onChange, isMutable} = props;
    const [isActive, setIsActive] = useState(false);
    const [isFocus, setIsFocus] = useState(false);
    const [isOnMouse, setIsOnMouse] = useState(false);
    
    const copyItems = isMutable ? items.filter(el=>el.includes(value)) : items;

    const handleOnBlur = () => {
        setIsFocus(false);
        isOnMouse || setIsActive(false);
    }

    const handleOnMouseLeave = () => {
        setIsOnMouse(false);
        isFocus || setIsActive(false)
    } 

    return(
        <StyledSearch active={isActive} onClick={()=>setIsActive(true)}>
            <input className="form__value" value={value || ""} name={name}  onFocus={()=> {
                setIsFocus(true)}} onBlur={handleOnBlur} onChange={isMutable ? onChange:null} readOnly={isMutable ? false: true}/>
                <label className="form__label"></label> 
                <ul className="list" onMouseOver={()=>setIsOnMouse(true)} onMouseLeave={handleOnMouseLeave}>
                    {copyItems.map(el=><li className="ingred" key={el} onClick={onChoose} value={el} name={name}>{el}</li>)} 
                </ul>
        </StyledSearch>
    )
}

export default Search;



