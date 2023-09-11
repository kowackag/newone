import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  colorBgc: string;
  colorShadowDark: string;
  colorShadowLight: string;
  colorFont: string;
  colorContrast: string;
}

const GlobbalStyle = createGlobalStyle<{
  theme: GlobalProps;
}>`
    :root {
        --color-alfa: ${(props) => props.theme.colorBgc};
        --color-beta: ${(props) => props.theme.colorShadowDark};
        --color-gamma: ${(props) => props.theme.colorShadowLight};
        --color-font: ${(props) => props.theme.colorFont};
        --color-contrast:${(props) => props.theme.colorContrast};
    }

    html {
        font-size: 11px;
    }

    body {
        font-family: "Roboto", Verdana, sans-serif;
        font-size: 1.6rem;
        line-height:1.5;
    }

`;
export default GlobbalStyle;
