import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        overflow-y: hidden;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;
