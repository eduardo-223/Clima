import React from "react";

import { Container } from "./styled";

import { useWeatherContext } from "../../provider/weather";

const CardWeatherDay = () => {
  const { weather } = useWeatherContext();
  const days = weather.data?.forecast.forecastday || [];

console.log(days)
  return (
    <Container>
      <ul>
        {days.map((day, index) => {
          return (
            <li key={index}>
              <img src={day.day.condition?.icon} alt={day.day.condition?.text} />
              <p>{day.day.condition?.text}</p>
              <p>{day.date}</p>
              <p>Lua {day.astro.moon_phase}</p>
              <span>Max {day?.day.maxtemp_c}º</span>
              <span>Min {day?.day.mintemp_c}º</span>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default CardWeatherDay;
