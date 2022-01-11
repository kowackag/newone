import styled, {css} from 'styled-components';

const DefaultStyledInput = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    display: flex;
    justify-content: space-between;
    
    border-radius: .4rem;
    box-shadow: inset 4px 4px 6px var(--color-beta), inset -4px -4px 10px var(--color-gamma);
    background-color: #ECEEF9;
    color: var(--color-font);

    & span {
        display:inline-block;
        padding: .4rem 1rem; 
    } 

    & input {
        padding: .4rem 1rem;
        width: 95%;
        flex-grow: 2;
        outline: none;
        border: none;
        border-top-left-radius: .4rem;
        border-bottom-left-radius: .4rem; 
        background-color: transparent;
        color: var(--color-font);
        border-top-right-radius: ${props=>
            !props.unit && css`.4rem`};
        border-bottom-right-radius: ${props=>
            !props.unit && css`.4rem`}; 
    }
    
    & input:focus {
        background-color:rgb(246,247,252);
        box-shadow: inset 4px 4px 6px var(--color-beta), inset -4px -4px 30px var(--color-gamma);
    }
`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;