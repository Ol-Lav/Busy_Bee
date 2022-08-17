import { useState } from "react";
import coldFlowers from '../../images/flowers.png';
import warmFlowers from '../../images/flowers-2.png';
import './Weather.scss';

const api = {
  key: "d680719249032b30fee449b3d1a4370c",
  base: "https://api.openweathermap.org/data/2.5/"
}

export const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        setQuery('')
      });
    };
  };

  return (
    <div className="weather">
    <div className="weather_input">
      <input
        type="text"
        placeholder="Search..."
        onChange={event => setQuery(event.target.value)}
        value={query}
        onKeyPress={search}
        className="weather_input"
      />
    </div>
    {(typeof weather.main !== 'undefined')
    ? (
      <>
        <div className="weather_location">
          {weather.name}, {weather.sys.country}
        </div>
        <div className="weather_temperature">
          {Math.round(weather.main.temp)} °C
        </div>
        <div className="weather_feels-like">
          <em>
          Feels like: {Math.round(weather.main.feels_like)} °C
          </em>
        </div>
        <div className="weather_text">
        {weather.weather[0].main}
        </div>
      </>
    ) : ('')
    }
    {(typeof weather.main != 'undefined')
      ? (weather.main.temp > 16)
        ? <img
            src={warmFlowers}
            alt="Flowers and bees" className="weather_img"
          />
        : <img
            src={coldFlowers}
            alt="Flowers and bees" className="weather_img"
          />
      : <img
          src={coldFlowers}
          alt="Flowers and bees" className="weather_img-main"
        />
       }
    </div>
  );
};
