import React, { useState } from "react";
import Form from "./components/Form";
import WeatherData from "./components/WeatherData";

const App = () => {
  const [searchCity, setSearchCity] = useState("mumbai");
  const [temperature, setTemperature] = useState("");

  const getSearchCity = (city) => setSearchCity(city);
  const getTemperature = (temp) => setTemperature(temp);

  return (
    <div className={`App ${temperature < 20 ? "Cold" : "Hot"}`}>
      <Form getSearchCity={getSearchCity} />
      <WeatherData searchCity={searchCity} getTemperature={getTemperature} />
    </div>
  );
};

export default App;
