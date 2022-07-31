import React from 'react';

export default function SecondaryCard({ weather, clickHandler }) {
  return (
    <div className="card secondary" onClick={clickHandler}>
      <div className="card-header secondary-header">
        <h4 className="card-date">{weather.date}</h4>
        <h5 className="card-weather-description">
          🌡 Average Temp: {weather.avgTemp}°C
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">🌡 Max Temp: {weather.maxTemp}°C</p>
        <p className="card-text">🌡 Min Temp: {weather.minTemp}°C</p>
        <p className="card-text">☀ Sun hours: {weather.sunHour}h</p>
        <p className="card-text">🕶 UV Index: {weather.uvIndex}</p>
        <p className="card-text">🌑 Moon phase: {weather.moonPhase}</p>
      </div>
    </div>
  );
}
