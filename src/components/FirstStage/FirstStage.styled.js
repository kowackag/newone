import styled, {css} from 'styled-components';

const DefaultStyledFirstStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    
    color: var(--color-font);
    display: ${props=> !props.active && css`none`};

    & .flex-wrapper {
        display: flex;
        justify-content: space-between;
    }

    & .buttons {
        display: flex;
        justify-content:center;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    & .errors {
        font-size:.8rem;
        font-style: italic;
    }

    & .errors__title {
        font-size:1rem;
    }

`
const StyledFirstStage = styled(DefaultStyledFirstStage)(props=>props.style);

export default StyledFirstStage;