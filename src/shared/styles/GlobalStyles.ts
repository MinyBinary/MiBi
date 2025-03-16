import { EColors } from 'shared/styles/style-variables/colors';
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
        background-color: ${EColors.Back1};
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
