import React from 'react';

export default function Card({ weather, today, tomorrow, afterTomorrow }) {
  return (
    <div className="card ">
      <div className="card-header">
        <h4>{weather.date}</h4>
        <h5>{weather.condition}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">🌡 Temp: {weather.temp}°C</p>
        <p className="card-text">🌡 Feels like: {weather.feelsLike}°C</p>
        <p className="card-text">☁ Cloud cover: {weather.cloudCover}%</p>
        <p className="card-text">💨 Wind speed: {weather.windSpeed} km/h</p>
        <p className="card-text">💧 Humidity: {weather.humidity}%</p>
        <p className="card-text">🕶 UV Index: {today.uvIndex}</p>
        <p className="card-text">☀ Sun hours: {today.sunHour}h</p>
        <p className="card-text">🌑 Moon phase: {today.moonPhase}</p>
      </div>
      <div className="border" />
      <div className="card-body">
        <p className="card-text">
          {tomorrow.date} - 🌡 Temp: {tomorrow.minTemp}/{tomorrow.maxTemp}°C
        </p>
        <p className="card-text">
          {afterTomorrow.date} - 🌡 Temp: {afterTomorrow.minTemp}/
          {afterTomorrow.maxTemp}°C
        </p>
      </div>
    </div>
  );
}