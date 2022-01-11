import styled, {css} from 'styled-components';

const DefaultStyledActivity = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    color: var(--color-font);
    width: 45%;
    
    & h4 {
        font-size:1.2rem;
        margin-bottom:1.5rem;
    }
`
const StyledFirstActivity = styled(DefaultStyledActivity)(props=>props.style);

export default StyledFirstActivity;

