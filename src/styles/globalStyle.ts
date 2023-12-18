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

    a, button{
        cursor: pointer;
        font-style: normal;
        text-decoration: none;
    }
    ul{
        list-style: none;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr; /* Uma coluna que se expande para preencher o espaço disponível */
        grid-gap: 20px; /* Espaçamento entre os elementos dentro do wrapper, ajuste conforme necessário */
        max-width: 1200px; /* Largura máxima do wrapper */
        margin: 0 auto; /* Centraliza o wrapper na página */
        padding: 20px; /* Adiciona algum espaçamento interno, ajuste conforme necessário */
    }

    /* Exemplo de media query para tornar o layout responsivo */
    @media screen and (min-width: 768px) {
        .wrapper {
            grid-template-columns: repeat(2, 1fr); /* Dois itens por linha em telas maiores que 768px */
        }

    }

    @media screen and (min-width: 1024px) {
        .wrapper {
            grid-template-columns: repeat(3, 1fr); /* Três itens por linha em telas maiores que 1024px */
        }
    }
    
`;

export default GlobalCSS;
