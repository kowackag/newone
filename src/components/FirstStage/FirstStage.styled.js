import styled, {css} from 'styled-components';

const DefaultStyledFirstStage = styled.div`
    display: ${props=> !props.active && css`none`};
`
const StyledFirstStage = styled(DefaultStyledFirstStage)(props=>props.style);

export default StyledFirstStage;