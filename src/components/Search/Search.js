import React from 'react';
import StyledSearch from './Search.styled';
import ingrediensDB from './../../db/ingrediens';


const Search = (props) => {
    const {value, name, onChange, onClick} = props;

    return(
        <StyledSearch>
            <input className="form__value" name={name} value={value} onChange={onChange} onClick={e=>console.log(e.target)}/>
            <ul className="list">{ingrediensDB.filter(el=>el.includes(value)).map(el=>(
                <li className="ingred" onClick={onClick} name={name} value={value}>{el}</li>
            ))}</ul>
        </StyledSearch>
    )
}

export default Search;

