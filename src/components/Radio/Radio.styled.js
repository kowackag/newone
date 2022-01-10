import styled from 'styled-components';

const DefaultStyledRadio = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 300px;
    margin-bottom:1.5rem;
    border-radius: .4rem;
    box-shadow: 6px 6px 16px var(--color-beta), -6px -6px 16px var(--color-gamma);
    background-color: var(--color-alfa);
    color: var(--color-font);
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        pointer:cursor;
    }

    & input[type=radio] {
        display: none;
    }

    & input[type=radio] + label {
        position: relative;
        padding-left: 26px; 
    }

    & label {
        width: 90%;
        position: relative;
        padding: .4rem 1rem;
        cursor: pointer;  
    }

    & .activity__name {
        font-size: 1rem;
        margin: 0;
    }

    & .activity__description {
        font-size: 0.8rem;
        margin: 0;
    }

    & label::after {
        box-sizing: border-box;
        position: absolute;
        top: 20px;
        right: -20px;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        box-shadow: 0px 0px 4px var(--color-beta), -2px -2px 4px var(--color-gamma);
        
        // background-color: var(--color-contrast);
        // border: 4px solid var(--color-alfa);
        // box-shadow: 0px 0px 4px var(--color-contrast);

        content: '';
    }

    & label::after:checked {
        position: absolute;
        top: 18px;
        right: 16px;
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 8px;
        box-shadow: 0px 0px 4px var(--color-beta), -2px -2px 4px var(--color-gamma);
        background-color: red;
        content: '';
      }

`


const StyledRadio = styled(DefaultStyledRadio)(props=>props.style);

export default StyledRadio;