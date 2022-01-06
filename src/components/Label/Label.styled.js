import styled from 'styled-components';

const DefaultStyledLabel = styled.label`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    display: block;
    margin-top: 1rem;
`
const StyledLabel = styled(DefaultStyledLabel)(props=>props.style);

export default StyledLabel;