import styled, {css} from 'styled-components';

const DefaultStyledInput = styled.div`
    font-size: 1.2rem;
    position: relative;
    
    & .form__unit {
        display:inline-block;
        padding: 1rem 1rem;  
        color: rgba(var(--color-font), .8)
    } 

    & .form__value {
        position: relative;
        display:inline-block;
        padding: 1rem 1rem;
        width: 100%;
        flex-grow: 2;
        outline: none;
        border: none;
        background-color: transparent;
        color: rgb(var(--color-font));
        color: rgba(var(--color-font),.8);
        font-size: 1.4rem;
        border-radius: .8rem;
        box-shadow: inset 4px 4px 6px rgb(var(--color-beta)), inset -4px -4px 6px rgb(var(--color-gamma));
        background-color: rgb(var(--color-alfa));
        cursor: context-menu;
    }

    .form__label::after ::before {
        content: '\/';
        font-weight:bold;
        position:absolute;
        display:block;
        content:"";
        border:25px solid transparent; /*Adjust chevron size*/
    }
 
    & .list {
        margin:0.2rem 0;
        display: ${props=> !props.active && css`none`};
        position: absolute;
        list-style: none;
        width: 100%;
        z-index:3;
        background-color: rgb(var(--color-alfa));
        box-shadow: 3px 3px 3px rgb(var(--color-beta)), inset -3px -3px 3px rgb(var(--color-gamma));
    }

    & .ingred {
        padding:0.4rem;
        border-bottom: 1px solid rgb(var(--color-beta));
        cursor: pointer;
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;