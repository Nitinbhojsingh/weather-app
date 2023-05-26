import React, { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import ErrorMessage from "./components/ErrorMessage";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dffaab89271c2e68f3297c7987d546c7&units=metric`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setErrorMessage("");
      })
      .catch((error) => {
        setWeather(null);
        setErrorMessage(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setErrorMessage("Please enter a city name");
    } else {
      fetchWeather();
    }
  };

  // WeatherCard
  return (
    <div className="app flex flex-col items-center">
      <h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>
      <Form city={city} setCity={setCity} handleSubmit={handleSubmit} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
