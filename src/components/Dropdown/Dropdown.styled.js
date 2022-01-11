import styled, {css} from 'styled-components';

const DefaultStyledDropdown = styled.select`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    padding: .4rem 1rem; 
    width: 95%;
    outline: none;
    border: none;
    border-radius: .4rem;
    box-shadow: inset 4px 4px 6px var(--color-beta), inset -4px -4px 10px var(--color-gamma);
    background-color: #ECEEF9;
    color: var(--color-font);
`
const StyledDropdown = styled(DefaultStyledDropdown)(props=>props.style);

export default StyledDropdown;