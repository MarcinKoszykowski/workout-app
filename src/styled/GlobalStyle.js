import { createGlobalStyle } from 'styled-components';
import { purple } from './colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Major+Mono+Display|Montserrat:100,200,300,400,500,600,700,800,900&display=swap&subset=latin-ext');

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
        background-color: ${purple};
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
