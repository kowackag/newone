import React, {useState} from 'react';
import StyledSearch from './Search.styled';


const Search = (props) => {
    const {name, value, prod, onChange, onClick, onChoose} = props;
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
            <ul className="list" onClick={onClick} >
                {prod.map(el=><li type="radio" className="ingred" onClick={getProduct} value={el} name={name}>{el}</li>)} 
            </ul>
        </StyledSearch>
    )

    //------------------OPCJA 2 --------------------
    // return(
    //     <StyledSearch active={isActive} >
    //         <input className="form__value" id={name} type="text" value={value} name={name} onChange={onChange} onClick={()=>setIsActive(true)}/>
    //         <label className="form__label" htmlFor={name}></label> 
    //         <ul className="list">
    //             {prod.filter(el=>el.includes(value)).map(el=><li type="radio" className="ingred" onClick={onChoose} name="excuded1">{el}</li>)} 
    //         </ul>
    //     </StyledSearch>
    // )
}


export default Search;



