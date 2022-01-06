import styled from 'styled-components';

const DefaultStyledButton = styled.button`
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
    &:hover, &:focus {
        outline: none;
        background-color: #6c37d7;
        color: var(--color-alfa);
        box-shadow: 4px 4px 10px #6c5a91,
        -4px -4px 10px #c0a0ff;
    }
`


const StyledButton = styled(DefaultStyledButton)(props=>props.style);

export default StyledButton;

