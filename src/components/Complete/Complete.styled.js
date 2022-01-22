import styled, {css} from 'styled-components';

const DefaultStyledComplete = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-contrast: ${props=>props.theme.colorContrast};
    --color-font: ${props=>props.theme.colorFont};

    display: ${props=> !props.active && css`none`};
    
    color: rgb(var(--color-font));

    & .header {
        font-size: 2rem;
        margin:2rem 0;
    }

    & .buttons {
        width:100%;
        display: flex;
        justify-content:center;
        margin: 2rem;
    }  
    
    & .info {
        margin: 100px auto 0;
    }

    & .thanks {
        margin: 0 auto 100px;
        font-style: italic;
        font-weight: bold;
        color: rgb(var(--color-contrast)); 
    }

`

const StyledComplete = styled(DefaultStyledComplete)(props=>props.style)


export default StyledComplete;
