import React, {useState} from 'react';
import StyledSearch from './Search.styled';

const Search = (props) => {
    const {name, value, items, onChoose, onChange, isMutable} = props;
    const [isActive, setIsActive] = useState(false);
    
    const getProduct=(e)=>{
        e.preventDefault();
        onChoose(e)
        setIsActive(false);
    }

    const copyItems = isMutable ? items.filter(el=>el.includes(value)) : items;

    return(
        <StyledSearch active={isActive}>
        <input className="form__value" value={value || ""} name={name} onClick={() => setIsActive(true)}  onChange={isMutable ? onChange:null} readOnly={isMutable ? false: true}/>
            <label className="form__label"></label> 
            <ul className="list" onMouseLeave={()=>setIsActive(false)}>
                {copyItems.map(el=><li className="ingred" key={el} onClick={getProduct} value={el} name={name}>{el}</li>)} 
            </ul>  
        </StyledSearch>
    )
}

export default Search;



