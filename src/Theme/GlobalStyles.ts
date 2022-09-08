import { css } from '@emotion/react';
import prevBtn from '../Assets/prevBtn.svg';
import nextBtn from '../Assets/nextBtn.svg';
import closeIcon from '../Assets/closeIcon.svg';

export const GlobalStyles = css`
    html {
        height: -webkit-fill-available;
    }

    body {
        display: flex;
        fex-direction: column;
        font-size: 12px;
        font-family: 'Jura', sans-serif;
        scroll-behavior: smooth-scroll;
        background: #0F0E0E;
        height: 100vh;
        height: -webkit-fill-available;
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
        margin-bottom: 20px; 
    }
    
    ::-webkit-scrollbar-track-piece:start {
        background: transparent;
        margin-top: 10px;
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
        box-shadow: 0 0 6px rgba(198, 198, 211, 0.25);
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
        box-shadow: 0 0 6px rgba(198, 198, 211, 0.25);
        opacity : 1
    }

    .ril__closeButton {
        background: transparent url(${closeIcon}) no-repeat center;
        background-size: 12px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
            top: 75%;
        }

        .chakra-button:hover p{
            padding-right: 0 ;
           transition: none;
       }

       ::-webkit-scrollbar-track-piece:end {
            margin-bottom: 100px; 
        }
    }
`;