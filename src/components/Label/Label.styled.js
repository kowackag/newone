import styled from 'styled-components';

const DefaultStyledLabel = styled.label`
    --color-font: ${props=>props.theme.colorFont};
    display: block;
    margin-top: 1.5rem;
    font-weight: 600;
    color:var(--color-font);
`
const StyledLabel = styled(DefaultStyledLabel)(props=>props.style);

export default StyledLabel;