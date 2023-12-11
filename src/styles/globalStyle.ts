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
    };

    *{
        border: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rethink Sans', sans-serif;
    }

    a, button{
        cursor: pointer;
        font-style: normal;
        text-decoration: none;
    }
    
`;

export default GlobalCSS;
