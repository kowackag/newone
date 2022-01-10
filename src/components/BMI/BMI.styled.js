import styled from 'styled-components';

const DefaultStyledBMI = styled.section`
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast:${props=>props.theme.colorContrast};
    
    color: var(--color-font);
    font-weight: 400;

    & h3 {
        font-size: 1.4rem;
        font-weight: 400;
    }

    & .bmi, .description {
        color: var(--color-contrast);
    }

    & .bmi {
        font-size: 3rem;
        font-weight: 200;
    }

    & .description {
        font-size: 2rem;
        font-weight: 600;
    }

`
const StyledBMI = styled(DefaultStyledBMI)(props=>props.style);

export default StyledBMI;