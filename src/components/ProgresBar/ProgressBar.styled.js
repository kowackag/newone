import styled from 'styled-components';

const DefaultStyledProgressBar = styled.div`
    display: inline-block;
    width: 100%;
    height: 1rem;
    background-color: rgb(var(--color-alfa));
    border-radius: 50px;
    box-shadow: 6px 6px 10px rgb(var(--color-beta)), -4px -4px 6px rgb(var(--color-gamma));
    line-height:1rem;

    & .progress {
        border-radius: 50px;
        width: ${props=>props.progress}%;
        background-color: rgba(var(--color-contrast),.8);
        display: inline-block;
        height: 100%;
    }
`

const StyledProgressBar = styled(DefaultStyledProgressBar)(props=> props.style);

export default StyledProgressBar;