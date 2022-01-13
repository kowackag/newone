import styled from 'styled-components';

const DefaultStyledButton = styled.input`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
   
    display: inline-block;
    padding: .4rem 1rem;
    width: 120px;
    margin: 1rem;
    border: none;
    border-radius: .4rem;
    box-shadow: 6px 6px 16px var(--color-beta), -6px -6px 16px var(--color-gamma);
    background-color: var(--color-alfa);
    color: var(--color-font);
    font-weight: 600;
    text-align: center;
    &:hover, &:focus {
        outline: none;
        background-color: rgba(25,12,170,0.75);
        color: var(--color-alfa);
        box-shadow: 2px 2px 4px #7c7bc5,-2px -2px 4px #a8a7ff;
    }
`

const StyledButton = styled(DefaultStyledButton)(props=>props.style);

export default StyledButton;

