import styled, {css} from 'styled-components';

const DefaultStyledLastStage = styled.div`
    display: ${props=> !props.active && css`none`};

    & .form__content {
        width: 70%;
    }
`

const StyledLastStage = styled(DefaultStyledLastStage)(props=>props.style);

export default StyledLastStage;