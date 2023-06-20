import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

body {
    background: linear-gradient(180deg, #14131B 0%, #08070B 100%);
    font-family:'JetBrains Mono';
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyles;
