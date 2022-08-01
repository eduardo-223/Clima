import styled from "styled-components";

export const Style = styled.div`
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: auto;
  padding: 8px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 2px, 2px, 4px gray;
  
  button{
    position: relative;
    left: 197px;
  }

  @media(min-width: 400px){
    width: 400px;

    button{
        left: 300px;
    }
  }

`;
