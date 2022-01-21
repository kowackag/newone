import React, {useEffect} from 'react';
import StyledSearch from './Search.styled';


const Search = (props) => {
    const {value, name, prod, onChange, onClick} = props;

    return(
        <StyledSearch>
            <input className="form__value" name={name} value={value} onChange={onChange} onClick={e=>console.log(e.target)}/>
            <ul className="list">{prod.filter(el=>el.includes(value)).map(el=>(
                <li className="ingred" onClick={onClick} name={name} value={value}>{el}</li>
            ))}</ul>
        </StyledSearch>
    )
}

export default Search;

