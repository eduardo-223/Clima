import styled, { css } from "styled-components";

import photo1 from "../../assets/img/paisagem1.jpg";
import photo2 from "../../assets/img/paisagem2.jpg";
import photo3 from "../../assets/img/paisagem3.jpg";
import photo4 from "../../assets/img/paisagem4.jpg";
import photo5 from "../../assets/img/paisagem5.jpg";
import photo6 from "../../assets/img/paisagem6.jpg";
import photo7 from "../../assets/img/paisagem7.jpg";
import photo8 from "../../assets/img/paisagem8.jpg";
import photo9 from "../../assets/img/paisagem9.jpg";
import photo10 from "../../assets/img/paisagem10.jpg";
import photo11 from "../../assets/img/paisagem11.jpg";
import photo12 from "../../assets/img/paisagem12.jpg";
import photo13 from "../../assets/img/paisagem13.jpg";
import photo14 from "../../assets/img/paisagem14.jpg";
import photo15 from "../../assets/img/paisagem15.jpg";
import photo16 from "../../assets/img/paisagem16.jpg";
import photo17 from "../../assets/img/paisagem17.jpg";
import photo18 from "../../assets/img/paisagem18.jpg";
import photo19 from "../../assets/img/paisagem19.jpg";
import photo20 from "../../assets/img/paisagem20.jpg";

const background = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
];

export const ContainerDiv = styled.div`
  color: #000;
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

export const Container = styled.div`
  ${((props) => props.number !== "" && css`background-image: url(${background[props.number]})`)};
  background-position: center center;
  background-size: cover;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  width:100%;
  height: 100%;
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
