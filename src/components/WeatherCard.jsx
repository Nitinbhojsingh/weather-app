import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
  faTint,
} from "@fortawesome/free-solid-svg-icons";


function WeatherCard({ weather }) {
  return (
    <div className="card bg-purple-500 text-white w-[220px] h-[350px] flex flex-col justify-center items-center mt-10 rounded-lg">
      <h4 className="text-2xl">{weather.name}</h4>
      {weather.weather[0].main === "Clear" && (
        <FontAwesomeIcon icon={faSun} className="text-5xl mt-4" />
      )}
      {weather.weather[0].main === "Clouds" && (
        <FontAwesomeIcon icon={faCloud} className="text-5xl mt-4" />
      )}
      {weather.weather[0].main === "Rain" && (
        <FontAwesomeIcon icon={faCloudRain} className="text-5xl mt-4" />
      )}
      {weather.weather[0].main === "Wind" && (
        <FontAwesomeIcon icon="fa-solid fa-wind" className="text-5xl mt-4" />
      )}
      {weather.weather[0].main === "CloudSun" && (
        <FontAwesomeIcon icon={faCloudSun} className="text-5xl mt-4" />
      )}

      {/* Add more conditions for different weather types */}
      <h2 className="text-5xl font-bold mb-2">{weather.main.temp}&deg;</h2>

      <div className="flex justify-between w-full px-4 mt-4">
        <p>{weather.weather[0].main}</p>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTint} className="mr-2" />
          <span>{weather.main.humidity}%</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
