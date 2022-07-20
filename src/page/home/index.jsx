import React from "react";

import { Container, Content, Search, SearchArea, CardContaienr } from "./style";

import { useWeatherContext } from "../../provider/weather/index";

import Card from "../../components/card";

const Home = () => {
  const { searchState, value, setValue} = useWeatherContext();

  return (
    <Container>
      <h1>Bem vindo ao ToClima!</h1>
      <Content>
        <Search>
          <h2>Digite sua localização:</h2>

          <SearchArea>
            <input type="text" placeholder="ex:Miami" onChange={(e)=> setValue(e.target.value)}/>
            <button onClick={() =>searchState(value)}>Pesquisar</button>
          </SearchArea>
        </Search>
      <CardContaienr>
          <Card/>
      </CardContaienr>
      </Content>
    </Container>
  );
};

export default Home;
