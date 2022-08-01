import React, { useState } from "react";

import { useWeatherContext } from "../../provider/weather";

import { BiCurrentLocation, BiError } from "react-icons/bi";

import { Container, Pulse, Header, Content, Info, P} from "./styled";
import CardWeatherDay from "../cardWeatherDay";
import ModalComponent from "../modal";

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

  const { weather, temp, setTemp, alert } = useWeatherContext();
  console.log(alert);

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
          <span>
            <BiCurrentLocation size={25} /> {weather.data?.location.name}
          </span>
          <span>
            <BiError size={25} onClick={() => setOpenModal(true)}/>
          </span>
        </h2>

        <Pulse>
          <span onClick={() => changeTemp()}>
            {temp}º{temp === weather.data.current.temp_f ? "F" : "C"}
          </span>
        </Pulse>

        <Info>
          <span>{weather.data.current.condition.text}</span>
          <img
            src={weather.data.current.condition.icon}
            alt={weather.data.current.condition.text}
          />
        </Info>
      </Header>
      <Content>
        <li>
          Ventos: <span>{weather.data.current.wind_kph}k/h</span>
        </li>
        <li>
          Humidade: <span>{weather.data.current.humidity}%</span>
        </li>
        <li>
          UV: <span>{weather.data.current.uv}</span>
        </li>
        <li>
          Pressão: <span>{weather.data.current.pressure_in}p</span>
        </li>
      </Content>
      <P>Próximos dias</P>
      <CardWeatherDay />
      {openModal && (
        <ModalComponent
          modal={openModal}
          setOpenModal={setOpenModal}
          signal={alert}
        />
      )}
    </Container>
  );
};

export default Card;
