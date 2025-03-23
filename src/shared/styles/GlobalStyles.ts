import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
      }

    }

    body {
        position: relative;
        max-width: 100%;
        margin: 0;
        background-color: ${({ theme }) => theme.global.background.primary};
    }

    body * {
        box-sizing: border-box;
    }

    #root {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
    }

`;
