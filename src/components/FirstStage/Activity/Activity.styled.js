import styled, {css} from 'styled-components';

const DefaultStyledActivity = styled.div`
    width: 45%;
`
const StyledFirstActivity = styled(DefaultStyledActivity)(props=>props.style);

export default StyledFirstActivity;

