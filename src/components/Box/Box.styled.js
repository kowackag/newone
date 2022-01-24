import styled from 'styled-components';

const DefaultStyledBox = styled.div`
    // width:100%;
    display: flex;
    justify-content:space-between;
`

const StyledBox = styled(DefaultStyledBox)(props=>props.style);

export default StyledBox;