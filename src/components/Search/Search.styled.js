import styled, {css} from 'styled-components';

const DefaultStyledInput = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
   
    font-size: 1.2rem;
    position: relative;

    & .form__unit {
        display:inline-block;
        padding: 1rem 1rem;  
        color: rgba(var(--color-font), .8)
    } 

    & .form__value {
        display:inline-block;
        padding: 1rem 1rem;
        width: 90%;
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
    }
    
    & .form__value:focus {
        background-color: rgba(var(--color-gamma));
        box-shadow: inset 3px 3px 3px rgb(var(--color-beta)), inset -3px -3px 3px rgb(var(--color-gamma));
    }

    & .list {
        position: absolute;
        list-style: none;
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;