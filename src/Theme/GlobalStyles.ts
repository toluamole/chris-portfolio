import { css } from '@emotion/react';
import prevBtn from '../Assets/prevBtn.svg';
import nextBtn from '../Assets/nextBtn.svg';
import closeIcon from '../Assets/closeIcon.svg';

export const GlobalStyles = css`
    html {
        height: -webkit-fill-available;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }

    body {
        display: flex;
        fex-direction: column;
        font-size: 12px;
        font-family: 'Jura', sans-serif;
        scroll-behavior: smooth-scroll;
        background: #0F0E0E;
        min-height: 100vh;
        height: -webkit-fill-available;
        width: 100vw;
        overflow: hidden;
    },

    ::-webkit-scrollbar {
        width: 5px;
        display: block;
    }
      
    ::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 20px;
    }
       
    ::-webkit-scrollbar-thumb {
        background: transparent; 
        border: 1px solid #686875;
        border-radius: 20px;
        border-clip: content-box;
    }

    ::-webkit-scrollbar-track-piece:end {
        background: transparent;
        margin-bottom: 60px; 
    }
    
    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 10px;
    }

    ::-moz-selection {
        background: #CA4F29;
        color: #F4F0EB
    }

    ::-webkit-selection {
        background:#CA4F29;
        color: #F4F0EB
    }

    ::selection {
        background: #CA4F29;
        color: #F4F0EB
    }

    
    .ril__navButtonPrev {
        display: block;
        left: 30px;
        background: transparent url(${prevBtn}) no-repeat center;
        background-size: 8px;
        // background-postion: 2px;
        backdrop-filter: opacity(1);
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        // box-shadow: 0 0 3px rgba(198, 198, 211, 0.4);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        opacity: 1
    }

    .ril__navButtonPrev:hover{
        transform: scale(1.1);
        background-position: 1em;
        transition: all .3s ease-out;
    }

    .ril__navButtonNext: hover{
        transform: scale(1.1);
        background-position: right 1em center;
        transition: all .3s ease-out;
    }


    .ril__navButtonNext {
        display: block;
        right: 30px;
        background: transparent url(${nextBtn}) no-repeat center;
        background-size: 8px;
        backdrop-filter: opacity(1);
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        // box-shadow: 0 0 3px rgba(198, 198, 211, 0.4);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        opacity : 1
    }

    .ril__closeButton {
        background: transparent url(${closeIcon}) no-repeat center;
        background-size: 12px;
    }

    ril__caption, .ril__toolbar {
        background-color: transparent;
    }

    .ril__toolbar {
        top: 25px;
        right: 10px;
        height: 50px;
        cursor: pointer;
    }

    .ril__inner {
        cursor: pointer;
    }

    .ril__builtinButton {
        width: 30px;
        height: 30px;
        border: 2px solid white;
        padding: 18px;
        border-radius: 50%;
        opacity: 1;
    }

    .chakra-button:hover p{
         padding-right: 10px ;
        transition: all .3s ease;
    }

    @media(max-width: 1000px){
        .ril__navButtonPrev, .ril__navButtonNext  {
            top: 80%;
        }
        .ril__toolbar {
            top: 35px;
        }

        .chakra-button:hover p{
            padding-right: 0 ;
            transform: none;
           transition: none;
       }
       .ril__navButtonPrev:hover,.ril__navButtonNext:hover{
            transform: none;
            background-position: 50% 50%;
            transition: none;
        }
    }
`;