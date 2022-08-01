import React from "react";

import { Container, Li } from "./styled";

import { useWeatherContext } from "../../provider/weather";

const CardWeatherDay = () => {
  const { weather } = useWeatherContext();
  const days = weather.data?.forecast.forecastday || [];

  return (
    <Container>
      <ul>
        {days.map((day, index) => {
          return (
            <Li key={index}>
              <div>
                <p>{day.day.condition?.text}</p>
                <img
                  src={day.day.condition?.icon}
                  alt={day.day.condition?.text}
                />
              </div>
              <p>{day.date}</p>
              <p><span>Lua: </span>{day.astro.moon_phase}</p>
              <p><span>Max: </span>{day?.day.maxtemp_c}º</p>
              <p><span>Min: </span>{day?.day.mintemp_c}º</p>
            </Li>
          );
        })}
      </ul>
    </Container>
  );
};

export default CardWeatherDay;
