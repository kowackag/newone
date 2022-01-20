import styled, {css} from 'styled-components';

const DefaultStyleThirdStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};

    display: ${props=> !props.active && css`none`};
    color: var(--color-font);

    & .exclusion__title {
        font-size: 1.4rem;
        margin:2rem 0;
    }

    & .form {
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    & .form__diet, .form__exclusion {
        width: 45%;
    }

    & .buttons {
        width:100%;
        display: flex;
        justify-content:center;
        margin: 2rem;
    }

    & .box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }

    & .errors {
        position: fixed;
        color: #e01010;
        font-size: .9rem;
        font-style: italic;
    }

`

const StyledThirdStage = styled(DefaultStyleThirdStage)(props=>props.style)


export default StyledThirdStage;