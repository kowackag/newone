import styled, {css} from 'styled-components';

const DefaultStyledFirstStage = styled.form`

`
const StyledFirstStage = styled(DefaultStyledFirstStage)(props=>props.style);

export default StyledFirstStage;