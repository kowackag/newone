import styled, {css} from 'styled-components';

const DefaultStyledLastStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};

    // display: ${props=> !props.active && css`none`};
    color: rgb(var(--color-font));

    & .goal-header {
        font-size: 1.6rem;
        margin:2rem 0;
    }

    & .form__content {
        width: 70%;
    }

    & .buttons {
        width:100%;
        display: flex;
        justify-content:center;
        margin: 2rem;
    }    

    & .errors {
        position: fixed;
        color: #e01010;
        font-size: .9rem;
        font-style: italic;
    }
`

const StyledLastStage = styled(DefaultStyledLastStage)(props=>props.style)


export default StyledLastStage;
