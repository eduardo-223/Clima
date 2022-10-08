import styled from "styled-components";

import photo1 from "../../assets/img/paisagem7.jpg";

// const background = [];

export const Container = styled.div`
  background-image: url(${photo1});
  background-size: cover;
  color: #000;
  background-blend-mode: color;
  height: 100vh;
  width: 100%;

  h1 {
    text-align: center;
    color: var(--blue-black);
    font-family: "Roboto", serif;
    font-weight: 600;
    margin-bottom: 20px;
    font-size: 1.7rem;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  width: 100%;
`;

export const SearchArea = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 400;
    text-align: left;
    margin-bottom: 10px;
  }

  input {
    border-radius: 4px 0 0 4px;
    flex: 2;
    border: 1px solid var(--blue);
    padding: 0 8px;
    height: 36.5px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }

  button {
    border-radius: 0 4px 4px 0;
    flex: 1;
  }
`;

export const CardContaienr = styled.div`
  margin-top: 15px;
`;
