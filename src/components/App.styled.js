import styled from 'styled-components';

const DefaultStyledApp = styled.section`
    --color-alfa: ${props=>props.theme.colorBody};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
  
    margin:50px auto;
    padding: 50px;
    max-width: 800px;
    box-shadow:8px 8px 20px #ccd1d8, 8px 8px 20px #ccd1d8;
    background-color: rgb(var(--color-alfa));
    color: rgb(var(--color-font));

    & .diet-app__title {
        margin-bottom: 1rem;
        color: rgb(var(--color-contrast));
    }
`
const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;