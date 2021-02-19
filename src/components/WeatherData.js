import { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { months, days } from "../data";
import { RiMistFill, RiThunderstormsFill, RiHazeFill, RiFoggyFill, RiDrizzleFill, RiTornadoFill } from "react-icons/ri";
import { IoMdSnow } from "react-icons/io";
import { IoRainy } from "react-icons/io5";
import { FaSun, FaCloud } from "react-icons/fa";
import "../styles/WeatherData.css";

const WeatherData = ({ searchCity, getTemperature }) => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getDate = () => {
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  const getWeatherIcon = () => {
    const weatherIcon = weatherData.weather[0].main;
    if (weatherIcon === "ThunderStorm") {
      return <RiThunderstormsFill />;
    } else if (weatherIcon === "Drizzle") {
      return <RiDrizzleFill />;
    } else if (weatherIcon === "Rain") {
      return <IoRainy />;
    } else if (weatherIcon === "Snow") {
      return <IoMdSnow />;
    } else if (weatherIcon === "Clear") {
      return <FaSun />;
    } else if (weatherIcon === "Clouds") {
      return <FaCloud />;
    } else if (weatherIcon === "Haze") {
      return <RiHazeFill />;
    } else if (weatherIcon === "Fog") {
      return <RiFoggyFill />;
    } else if (weatherIcon === "Tornado") {
      return <RiTornadoFill />;
    } else {
      return <RiMistFill />;
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const url = `${process.env.REACT_APP_API_URL}?q=${searchCity}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        getTemperature(data.main.temp);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchWeatherData();
  }, [searchCity, getTemperature]);

  if (isLoading) {
    return <Loading />;
  }

  if (weatherData.cod === "404") {
    return <Error error="Please enter a city that really exists!" />;
  }

  if (weatherData.cod === "400") {
    return <Error error="Please enter a value!" />;
  }

  return (
    <div className="WeatherData container">
      <h2 className="city-name">
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <h2 className="date">{getDate()}</h2>
      <h2 className="temperature">{weatherData.main.temp}°C</h2>
      <p className="weather">
        {weatherData.weather[0].main} &nbsp; {getWeatherIcon()}
      </p>
    </div>
  );
};

export default WeatherData;
