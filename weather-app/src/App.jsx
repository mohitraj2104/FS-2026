import { useState } from 'react'
import axios from "axios";
import "./App.css";
import clear from "./assets/clear.jpg";
import cloud from "./assets/cloud.jpg";
import rain from "./assets/rain.jpg";
import snow from "./assets/snow.jpg";
import thunderstorm from "./assets/thunderstorm.jpg";
import mist from "./assets/mist.jpg";
import defaultBg from "./assets/default.jpg";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "9fa1fd0f5cb8fe327ba8896b5a4fb3f5"; // Replace with your API key

  // Default Background
  let background = defaultBg;

  // Change Background According to Weather
  if (weather) {
    const condition = weather.weather[0].main;

    switch (condition) {
      case "Clear":
        background = clear;
        break;

      case "Clouds":
        background = cloud;
        break;

      case "Rain":
      case "Drizzle":
        background = rain;
        break;

      case "Snow":
        background = snow;
        break;

      case "Thunderstorm":
        background = thunderstorm;
        break;

      case "Mist":
      case "Fog":
      case "Haze":
        background = mist;
        break;

      default:
        background = defaultBg;
    }
  }

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("City not found");
      setWeather(null);
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        transition: "0.8s ease-in-out",
      }}
    >
      <h1 className="title">🌦 Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") getWeather();
          }}
        />

        <button onClick={getWeather}>Search</button>
      </div>

      {weather && (
        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt="Weather Icon"
            className="weather-icon"
          />

          <h2>
            {weather.name}, {weather.sys.country}
          </h2>

          <h1>{Math.round(weather.main.temp)}°C</h1>

          <h3>{weather.weather[0].main}</h3>

          <div className="details">
            <div className="box">
              💧
              <p>Humidity</p>
              <h4>{weather.main.humidity}%</h4>
            </div>

            <div className="box">
              💨
              <p>Wind</p>
              <h4>{weather.wind.speed} m/s</h4>
            </div>

            <div className="box">
              🌡
              <p>Feels Like</p>
              <h4>{Math.round(weather.main.feels_like)}°C</h4>
            </div>

            <div className="box">
              👁
              <p>Visibility</p>
              <h4>{weather.visibility / 1000} km</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;