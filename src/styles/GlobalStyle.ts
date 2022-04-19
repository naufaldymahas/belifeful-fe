import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.default};
    margin: 0;
    color: ${({ theme }) => theme.colors.darkCharcoal};
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

h1,h2,h3 {
    margin: 0;
}
`;

export default GlobalStyle;
