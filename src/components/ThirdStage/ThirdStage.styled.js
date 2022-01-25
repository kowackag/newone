import styled, {css} from 'styled-components';

const DefaultStyleThirdStage = styled.div`
    --color-font: ${props=>props.theme.colorFont};

    display: ${props=> !props.active && css`none`};
    color: var(--color-font);

    & .form {
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    & .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const StyledThirdStage = styled(DefaultStyleThirdStage)(props=>props.style)


export default StyledThirdStage;