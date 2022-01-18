import {createGlobalStyle} from 'styled-components';

const GlobbalStyle = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: normal;
        src:
        url('./fonts/roboto-medium-webfont.woff2') format('woff2'),
        url('./fonts/roboto-medium-webfont.woff2') format('woff');
    }

    @font-face {
        font-family: "Roboto";
        font-style: bold;
        font-weight: 800;
        src:
        url('./fonts/roboto-bold-webfont.woff2') format('woff2'),
        url('./fonts/roboto-bold-webfont.woff') format('woff');
    }

    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 800;
        src:
        url('./fonts/roboto-italic-webfont.woff2') format('woff2'),
        url('./fonts/roboto-italic-webfont.woff') format('woff');
    }

    html {
        font-size: 10px;
    }

    body {
        font-family: Roboto, Verdana, sans-serif;
        font-size:1.6rem;
    }
`


export default GlobbalStyle;