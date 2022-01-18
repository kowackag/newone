import styled from 'styled-components';

const DefaultStyledParameters = styled.div`
    width:45%;

    & .errors {
        position: fixed;
        color: #e01010;
        font-size:.8rem;
        font-style: italic;
    }
`
const StyledParameters = styled(DefaultStyledParameters)(props=>props.style);

export default StyledParameters