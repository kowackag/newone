import styled from 'styled-components';

const DefaultStyledApp = styled.section`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};

    color: var(--color-font);
    margin:50px;
    padding: 50px;
    background-color: var(--color-alfa);
    border: 3px inset var(--color-font);
    
    & .diet-app__title {
        color: var(--color-contrast);
    }
`
const StyledApp = styled(DefaultStyledApp)(props=>props.style);

export default StyledApp;