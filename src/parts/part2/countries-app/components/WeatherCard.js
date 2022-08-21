import React from 'react'

export const WeatherCard = ({weather}) => {
  return (
    <div className="weather-card">
      <div>
        <img src={weather?.current.weather_icons} alt="..." />
        <div class="temperature">
          {weather?.current.temperature}°
        </div>
      </div>
      <ul>
        <li>
          <span>Localidad</span>
          <span>{weather?.location.name}</span>
        </li>
        <li>
          <span>País</span>
          <span>{weather?.location.country}</span>
        </li>
      </ul>
    </div>
  )
}
