import styled, {css} from 'styled-components';

const DefaultStyleSecondStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};

    display: ${props=> !props.active && css`none`};
    color: rgb(var(--color-font));

    & .goal-header {
        font-size: 1.4rem;
        margin-top:1rem;
    }

    & .form {
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    & .form__option {
        width: 45%;
    }

    & .buttons {
        width:100%;
        display: flex;
        justify-content:center;
        margin: 2rem;
    }    
`

const StyledSecondStage = styled(DefaultStyleSecondStage)(props=>props.style)


export default StyledSecondStage