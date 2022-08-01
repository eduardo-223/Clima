import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        ::before,::after{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
    }
    
    :root{
        --white-text: #f5f5f5;
        --white: #e9ecef;
        --blue: #219ebc;
        --blue-black: #023047;
        --yellow: #ffb703;
        --orange: #fb8500;
    }

    body,html{
        background-color: #fffff0;
        color: var(--blue-black);
        font-size: 16px;
    }

    body, input, button{
        font-family: 'PT Serif', serif; 
        font-size: 1rem;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul,li{
        list-style: none;
    }
`;
