import styled, {css} from 'styled-components';

const DefaultStyledFirstStage = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    
    display: ${props=> !props.active && css`none`};
    // display: none;
    color: rgb(var(--color-font));

    & .flex-wrapper {
        display: flex;
        justify-content: space-between;
        // align-items:center;
    }

    & .buttons {
        display: flex;
        justify-content:center;
        margin-top: 2rem;
    }

`
const StyledFirstStage = styled(DefaultStyledFirstStage)(props=>props.style);

export default StyledFirstStage;