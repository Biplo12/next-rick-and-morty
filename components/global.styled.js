import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');
*{
    box-sizing: border-box;
}
html, body{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
ul{
    list-style: none;
}
a{
    text-decoration: none;
}
`;

export default GlobalStyles;
