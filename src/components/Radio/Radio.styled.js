import styled, {css} from 'styled-components';

const DefaultStyledRadio = styled.label`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    
    width: 100%;
    margin-top:1.5rem;
    position: relative;
    padding: .4rem 1rem;
    cursor: pointer;  
    border-radius: .4rem;
    box-shadow: 6px 6px 16px var(--color-beta), -6px -6px 16px var(--color-gamma);
    background-color: var(--color-alfa);
    color: var(--color-font);
    font-weight: 400;
    box-sizing: border-box;

    & ::after {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        right: 6%;
        transform: translateY(-50%);
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        box-shadow: 0px 0px 4px var(--color-beta), -2px -2px 4px var(--color-gamma);
        content: '';
        background-color: ${props=>props.active && css`var(--color-contrast)`};
        border: ${props=>props.active && css`4px solid var(--color-alfa)`};
        box-shadow: ${props=>props.active && css`0px 0px 4px var(--color-contrast)`};
    }

    &:hover {
        pointer:cursor;
    }

    & input[type=radio] {
        display: none;
    }

    & .activity__name {
        font-size: 1rem;
        margin: 0;
    }

    & .activity__description {
        max-width:90%;
        font-size: 0.8rem;
        margin: 0;
    }

`


const StyledRadio = styled(DefaultStyledRadio)(props=>props.style);

export default StyledRadio;