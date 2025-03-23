// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background: linear-gradient(135deg, #e0f7fa, #f0f4ff);
    color: #1e293b;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
