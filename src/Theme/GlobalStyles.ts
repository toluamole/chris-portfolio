import { css } from '@emotion/react';

export const GlobalStyles = css`
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
        background: #fff url(process.env.PUBLIC_URL + /public/images/prevBtn.svg) no-repeat center;
        background-size: 10px 15px;
        backdrop-filter: opacity(1);
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        opacity: 1
    }

    // .ril__navButtonPrev:hover{
    //     transform: scale(1.2);
    //     // max-width: 100px;
    //     // margin-right: 45px;
    // }

    .ril__navButtonNext {
        display: block;
        right: 30px;
        background: transparent url(process.env.PUBLIC_URL + /public/images/vector.svg) no-repeat center;
        background-size: 10px 15px;
        backdrop-filter: opacity(1);
        color: white;
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        opacity : 1
    }

    ril__caption, .ril__toolbar {
        background-color: transparent;
    }

    .ril__image, .ril__imagePrev, .ril__imageNext {
        cursor: progress;
    }

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

    // .ril__image, .ril__imagePrev, .ril__imageNext {
    //     width: 800px;
    //     height: auto;
    // }

    // @media (hover: hover) {
    //     button:hover { bg: #CA4F29; color:#F4F0EB }
    //     button p:hover{transform: none; margin: 0; transition: none}
    // }

    @media(max-width: 1000px){
        .ril__navButtonPrev, .ril__navButtonNext  {
            top: 60%;
        }
    }
`;