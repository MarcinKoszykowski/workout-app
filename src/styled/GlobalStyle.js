import { createGlobalStyle } from 'styled-components';
import { purple, colorWithOpacity } from './colors';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        box-sizing: inherit;
        vertical-align: baseline;
        text-decoration: none;
        list-style: none;
        font-family: 'Montserrat', sans-serif;
    }

    html {
        font-size: 16px;
    }

    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: transparent;
    }

    body {
        position: relative;
        overflow-x: hidden;
        overflow-y: scroll;
        background-color: ${colorWithOpacity(purple, 0.3)};
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
