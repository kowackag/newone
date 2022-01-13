import styled, {css} from 'styled-components';

const DefaultStyleThirdStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};

    display: ${props=> !props.active && css`none`};
    color: var(--color-font);

    & .header {
        font-size:1.2rem;
        margin-bottom:1.5rem;
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
    
    & .errors {
        font-size:.8rem;
        font-style: italic;
    }

    & .errors__title {
        font-size:1rem;
    }
    
`

const StyledThirdStage = styled(DefaultStyleThirdStage)(props=>props.style)


export default StyledThirdStage;