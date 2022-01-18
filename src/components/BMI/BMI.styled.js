import styled from 'styled-components';

const DefaultStyledBMI = styled.section`
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    width:45%;
    font-weight: 400;
    font-size: 1.4rem;
    
    & .bmi-value, .bmi-description {
        color: rgb(var(--color-contrast));
    }

    & .bmi {
        font-size: 3.2rem;
        font-weight: 200;
    }

    & .bmi-description {
        font-size: 1.6rem;
        font-weight: 600;
    }

`
const StyledBMI = styled(DefaultStyledBMI)(props=>props.style);

export default StyledBMI;