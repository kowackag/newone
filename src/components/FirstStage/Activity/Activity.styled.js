import styled, {css} from 'styled-components';

const DefaultStyledActivity = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    width: 45%;
`
const StyledFirstActivity = styled(DefaultStyledActivity)(props=>props.style);

export default StyledFirstActivity;

