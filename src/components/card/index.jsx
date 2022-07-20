import React from "react";

import { useWeatherContext } from "../../provider/weather";

import { BiCurrentLocation, BiError } from "react-icons/bi";

import { Container, Pulse, Header, Content } from "./styled";
import CardWeatherDay from "../cardWeatherDay";

const Card = () => {
  const { weather, temp, setTemp } = useWeatherContext();

  const changeTemp = () => {
    if (temp === weather.data.current.temp_c) {
      setTemp(weather.data.current.temp_f);
    } else if (temp === weather.data.current.temp_f) {
      setTemp(weather.data.current.temp_c);
    }
  };

  return (
    <Container>
      <Header>
        <h2>
          {weather.data?.location.name} <BiCurrentLocation />  <BiError/>
        </h2>

        <Pulse>
          <span onClick={() => changeTemp()}>
            {temp}º{temp === weather.data?.current.temp_f ? "F" : "C"}
          </span>
        </Pulse>

        <p>
          {weather.data?.current.condition.text}{" "}
          <img
            src={weather.data?.current.condition.icon}
            alt={weather.data?.current.condition.text}
          />
        </p>
      </Header>
      <Content>
        <li>Vento <span>{weather.data?.current.wind_kph}k/h</span></li>
        <li>Humidade <span>{weather.data?.current.humidity}%</span></li>
        <li>UV <span>{weather.data?.current.uv}</span></li>
        <li>Pressão <span>{weather.data?.current.pressure_in}p</span></li>
      </Content>
      <CardWeatherDay/>
    </Container>
  );
};

export default Card;
