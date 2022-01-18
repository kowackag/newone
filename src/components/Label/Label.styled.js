import styled from 'styled-components';

const DefaultStyledLabel = styled.label`
    --color-font: ${props=>props.theme.colorFont};
    display: block;
    margin-top: 2.2rem;
    margin-bottom: 0.4rem;
    font-size: 1.4rem;
    font-weight: 600;
    color:var(--color-font);

    :first-of-type {
        margin-top: 0;
    }

`
const StyledLabel = styled(DefaultStyledLabel)(props=>props.style);

export default StyledLabel;