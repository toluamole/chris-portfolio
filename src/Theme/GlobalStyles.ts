import { css } from '@emotion/react';
import prevBtn from '../Assets/prevBtn.svg';
import nextBtn from '../Assets/nextBtn.svg';
import closeIcon from '../Assets/closeIcon.svg';

export const GlobalStyles = css`
    html, body{
        min-height: 100%;
        height: auto;
    }
    body {
        font-size: 12px;
        font-family: 'Jura', sans-serif;
        scroll-behavior: smooth-scroll;
        background: #0F0E0E;
    },

    ::-webkit-scrollbar {
        width: 5px;
        display: block;
    }
      
    ::-webkit-scrollbar-track {
        background: transparent; 
        border-radius: 20px;
        // margin-block: 5rem;
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
        margin-top: 20px;
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
        opacity : 1
    }

    .ril__closeButton {
        background: transparent url(${closeIcon}) no-repeat center;
        background-size: 12px;
    }

    ril__caption, .ril__toolbar {
        background-color: transparent;
    }

    // .ril__image, .ril__imagePrev, .ril__imageNext {
    //     cursor: pointer;
    // }

    .ril__toolbar {
        top: 25px;
        right: 10px;
        height: 50px;
        // right: 132px;
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
        // max-width: 100px; 
         padding-right: 10px ;
        transition: all .3s ease;
    }

    // .chakra-link p:before {
    //     content: " ",
    //     position: absolute;
    //     bottom: -20px;
    //     right: 0;
    //     left: 0;
    // }
    // .chakra-link:hover p {
    //    transform: translateY(-10px);
    //     transition: all .3s ease;
    // }

    @media(max-width: 1000px){
        .ril__navButtonPrev, .ril__navButtonNext  {
            top: 60%;
        }
    }
`;