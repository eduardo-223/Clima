import React from "react";

import { Container, Content, Search, SearchArea, CardContaienr } from "./style";

import { useWeatherContext } from "../../provider/weather/index";

import { Button } from "@mui/material";

import Card from "../../components/card";

const Home = () => {
  const { searchState, value, setValue, weather, visibilit } =
    useWeatherContext();

  return (
    <Container>
      <h1>Bem vindo ao ToClima!</h1>
      <Content>
        <Search>
          <SearchArea>
            <h2>Digite sua localização:</h2>
            <div>
              <input
                type="text"
                placeholder="ex:Miami"
                onChange={(e) => setValue(e.target.value)}
              />
              <Button variant="contained" onClick={() => searchState(value)}>
                Pesquisar
              </Button>
            </div>
            <CardContaienr>{visibilit && <Card />}</CardContaienr>
          </SearchArea>
        </Search>
      </Content>
    </Container>
  );
};

export default Home;
