import styled from 'styled-components';

const DefaultStyledApp = styled.section`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
  
    margin:50px auto;
    padding: 50px;
    max-width: 900px;
    // border: 3px inset var(--color-font);
    box-shadow:8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
    background-color: var(--color-alfa);
    color: var(--color-font);

    & .diet-app__title {
        margin-bottom: 2rem;
        color: var(--color-contrast);
    }
`
const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;