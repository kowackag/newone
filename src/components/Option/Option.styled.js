import styled from 'styled-components';

const DefaultStyledOption = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    display: block;
    padding: .4rem 1rem;
    width: 300px;
    margin-bottom: 1rem;
    border-radius: .4rem;
    box-shadow: 6px 6px 16px var(--color-beta), -6px -6px 16px var(--color-gamma);
    background-color: var(--color-alfa);
    color: var(--color-font);
    font-weight: 400;

    &:hover {
        outline: none;
        background-color: #dc5ec7;
        color: var(--color-alfa);
        box-shadow: 2px 2px 6px #c37eb8,
        -2px -2px 6px #ffaaf8;
    }
`


const StyledOption = styled(DefaultStyledOption)(props=>props.style);

export default StyledOption;