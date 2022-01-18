import styled, {css} from 'styled-components';

const DefaultStyledRadio = styled.label`
    --color-alfa: ${props=>props.theme.colorBody};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    
    display:inline-block;
    width: 100%;
    margin-top: 2rem;
    position: relative;
    padding: 1rem 1rem;
    cursor: pointer;  
    border-radius: .8rem;
    box-shadow: 6px 6px 10px rgb(var(--color-beta)), -6px -6px 8px rgb(var(--color-gamma));
    background-color: rgb(var(--color-alfa));
    color: var(--color-font);
    font-size: 1.3rem;

    & ::after {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        right: 6%;
        transform: translateY(-50%);
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 8px;
        box-shadow: 0px 0px 8px rgb(var(--color-beta));
        content: '';
    
        background-color: ${props=>props.active && css`rgb(var(--color-contrast))`};
        border: ${props=>props.active && css`4px solid rgb(var(--color-alfa))`};
        box-shadow: ${props=>props.active && css`0px 0px 4px rgb(var(--color-contrast))`};
    }

    &:hover {
        pointer:cursor;
    }

    & input[type=radio] {
        display: none;
    }

    & .activity__name {
        font-size: 1.3rem;

    }

    & .activity__description {
        max-width: 90%;
        font-size: 1rem;
        color: rgba(var(--color-font), 0.5)
    }

`


const StyledRadio = styled(DefaultStyledRadio)(props=>props.style);

export default StyledRadio;