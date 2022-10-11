import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      )
      .then(res => setWeatherData(res.data));
  }, []);

  console.log(weatherData);
  return (
    <>
      <h2>Current weather in {city}</h2>
      {weatherData ? (
        <>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt='weather icon'
          />
          <p>
            {weatherData.weather[0].main} - {weatherData.weather[0].description}
          </p>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
};

export default Weather;
