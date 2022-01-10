import styled from 'styled-components';

const DefaultStyledParameters = styled.form`
    
`
const StyledParameters = styled(DefaultStyledParameters)(props=>props.style);

export default StyledParameters