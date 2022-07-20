import { createContext, useState, useContext } from "react";

import api from "../../services/api/api";
import keyApi from "../../services/key/key";

const WeatherContext = createContext();

const SearchWeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState(0);

  async function searchState(city) {
    const responseSearch = await api.get(
      `forecast.json?key=${keyApi}&q=${city}&days=10&aqi=no&alerts=yes&lang=pt`
    );
    setTemp(responseSearch.data.current.temp_c);
    setWeather(responseSearch);
  }

  return (
    <WeatherContext.Provider
      value={{ searchState, weather, value, setValue, temp, setTemp }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  return context;
};

export { useWeatherContext, SearchWeatherProvider };
