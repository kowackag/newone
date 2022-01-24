import styled from 'styled-components';

const DefaultStyledParameters = styled.div`
    width:45%;
`
const StyledParameters = styled(DefaultStyledParameters)(props=>props.style);

export default StyledParameters