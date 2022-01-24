import styled from 'styled-components';

const DefaultStyledError = styled.p`
    position: fixed;
    color: #e01010;
    font-size: .9rem;
    font-style: italic;
`

const StyledError = styled(DefaultStyledError)(props=>props.style);

export default StyledError;