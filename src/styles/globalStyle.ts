import { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
    :root{
        --gray:#9c9da8;
        --gray-2:#a9adaf;
        --black: #18120e;
        --brown-dark:#301a13;
        --brown: #442719;
        --brown-gray:#857876;
        --clay:#976955;
        --clay-gray: #9c8b82;
        --brown-light:#c4a492;
        --brown-gray-dark: #584b45;
        --yellow-light: #F9F871;
        --green: #75B28C;
        --blue-dark: #2F4858;
        --gray-black: #262626;
        --white: #fdfdfd;

    };

    *{
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rethink Sans', sans-serif;
        color: var(--gray-2);
    }
    body{
        background: var(--gray-black);
    }
    html{scroll-behavior: smooth;}
    a, button{
        cursor: pointer;
        font-style: normal;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }

    .wrapper {
        position: relative;
        width: 100%;
        max-width: 1420px;
        box-sizing: border-box;
        margin-right: auto;
        margin-left: auto;
        @media screen and (max-width: 1599px) {
            max-width: 1180px;
            @media screen and (max-width: 1220px) {
                padding-right: 16px;
                padding-left: 16px;
            }
        }
    }
    .slick-slide{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
`;

export default GlobalCSS;
