import styled, {css} from 'styled-components';

const DefaultStyledInput = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    display: flex;
    justify-content: space-between;
    border-radius: .8rem;
    box-shadow: inset 4px 4px 6px rgb(var(--color-beta)), inset -4px -4px 6px rgb(var(--color-gamma));
    background-color: rgb(var(--color-alfa));
    font-size: 1.2rem;

    & .form__unit {
        display:inline-block;
        padding: .8rem 1rem;  
        color: rgba(var(--color-font), .8)
    } 

    & .form__value {
        display:inline-block;
        padding: .6rem 1rem;
        width: 90%;
        flex-grow: 2;
        outline: none;
        border: none;
        border-top-left-radius: .8rem;
        border-bottom-left-radius: .8rem; 
        background-color: transparent;
        color: rgb(var(--color-font));
        color: rgba(var(--color-font),.8);
        border-top-right-radius: ${props=>
            !props.unit && css`.8rem`};
        border-bottom-right-radius: ${props=>
            !props.unit && css`.8rem`}; 
        font-size: 1.4rem;
    }
    
    & .form__value:focus {
        background-color: rgba(var(--color-gamma));
        box-shadow: inset 3px 3px 3px rgb(var(--color-beta)), inset -3px -3px 3px rgb(var(--color-gamma));
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;