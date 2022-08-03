import styled, { createGlobalStyle } from "styled-components";
import { primaryColor, primaryDarkColor } from "../conf/color";

export default createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        outline: none;
        box-sizing: border-box;
    }

    body{
        font-family: sans-serif;
        background-color: ${primaryDarkColor};
    }

    html, body, #root{
        height: 100%;
    }

    button{
        cursor: pointer;
        background: ${primaryColor};
        border-radius: 4px;
        color: #fff;
        padding: 10px 20px;
        
    }

    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;

export const Container = styled.section`
  max-width: 360;
  background: #fff;
  margin: 30px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 0 4px rgba(0, 0, 0, 1);
`;
