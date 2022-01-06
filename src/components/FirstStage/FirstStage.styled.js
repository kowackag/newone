import styled, {css} from 'styled-components';

const DefaultStyledInput = styled.form`

`
const StyledInput = styled(DefaultStyledInput)(props=>props.style);

export default StyledInput;