import styled, {css} from 'styled-components';

const DefaultStyledOption = styled.label`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    display: block;
    padding: .4rem 1rem;
    width: 95%;
    margin-bottom: 1.5rem;
    border-radius: .4rem;
    box-shadow: ${props =>!props.active ? css`6px 6px 16px var(--color-beta), -6px -6px 16px var(--color-gamma)` : css`2px 2px 6px #c37eb8,
    -2px -2px 6px #ffaaf8`};
    background-color: ${props=>!props.active ? css`var(--color-alfa)`:css`#dc5ec7`};
    color: ${props=>!props.active ? css`var(--color-font)`: css`var(--color-alfa)`};
    font-weight: 400;

    & input[type=radio] {
        display: none;
    }
    cursor: pointer;
`


const StyledOption = styled(DefaultStyledOption)(props=>props.style);

export default StyledOption;