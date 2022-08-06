import { css } from '@emotion/react';

export const GlobalStyles = css`
    body {
        font-size: 12px;
        font-family: 'Jura', sans-serif;
        scroll-behavior: smooth-scroll;
    },

    ::-webkit-scrollbar {
        width: 7px;
    }
      
    ::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 20px;
    }
       
    ::-webkit-scrollbar-thumb {
        background: transparent; 
        border: 1px solid #686875;
        border-radius: 20px;
    }

    ::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 50px; 
    }
    
    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 50px;
    }
`;