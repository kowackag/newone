import styled, {css} from 'styled-components';

const DefaultStyledDropdown = styled.select`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    padding: .8rem 1rem; 
    width: 95%;
    outline: none;
    border: none;
    border-radius: .8rem;
    box-shadow: inset 4px 4px 6px rgb(var(--color-beta)), inset -4px -4px 10px rgba(var(--color-gamma));
    background-color: rgb(var(--color-alfa));
    color: rgba(var(--color-font),.9);
`
const StyledDropdown = styled(DefaultStyledDropdown)(props=>props.style);

export default StyledDropdown;