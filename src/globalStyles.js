import { createGlobalStyle } from "styled-components";

import Anton from "./fonts/Anton-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Anton';
    src: url(${Anton}) format('truetype');
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Anton";
}
`;

export default GlobalStyle;