import styled from 'styled-components';

const DefaultStyledParameters = styled.div`
    
`
const StyledParameters = styled(DefaultStyledParameters)(props=>props.style);

export default StyledParameters