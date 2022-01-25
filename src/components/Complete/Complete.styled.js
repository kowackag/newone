import styled, {css} from 'styled-components';

const DefaultStyledComplete = styled.div`
    --color-contrast: ${props=>props.theme.colorContrast};

    display: ${props=> !props.active && css`none`};
    font-weight: bold;

    & .thanks {
        margin: 6rem 0 6rem;
        font-style: italic;
        color: rgb(var(--color-contrast)); 
    }
`

const StyledComplete = styled(DefaultStyledComplete)(props=>props.style);

export default StyledComplete;
