import styled, {css} from 'styled-components';

const DefaultStyledActivity = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    color: var(--color-font);
    width: 45%;
    
    & .activity__title {
        font-size: 1.6rem;
        // margin-top:1rem;
    }

    & .errors {
        position: fixed;
        color: #e01010;
        font-size:.9rem;
        font-style: italic;
    }
`
const StyledFirstActivity = styled(DefaultStyledActivity)(props=>props.style);

export default StyledFirstActivity;

