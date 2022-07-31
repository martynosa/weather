import React from 'react';

export default function PrimaryCard({ weather, clickHandler }) {
  return (
    <div className="card primary" onClick={clickHandler}>
      <div className="card-header primary-header">
        <h4 className="card-date">Today - {weather.date}</h4>
        <h5 className="card-weather-description">{weather.condition}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">🌡 Temp: {weather.temp}°C</p>
        <p className="card-text">🌡 Feels like: {weather.feelsLike}°C</p>
        <p className="card-text">☁ Cloud cover: {weather.cloudCover}%</p>
        <p className="card-text">💧 Humidity: {weather.humidity}%</p>
        <p className="card-text">💨 Wind speed: {weather.windSpeed} km/h</p>
      </div>
    </div>
  );
}
