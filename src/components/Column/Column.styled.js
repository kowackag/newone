import styled from 'styled-components';

const DefaultStyledColumn = styled.div`
    width:45%;
`

const StyledColumn = styled(DefaultStyledColumn)(props=>props.style);

export default StyledColumn;