import React from "react";

export default function Card({ weather, today, tomorrow, afterTomorrow }) {
  return (
    <div className="card ">
      <div className="card-header">
        <h4>{weather.date}</h4>
        <h5>{weather.condition}</h5>
      </div>
      <div className="card-body">
        <p>🌡 Temp: {weather.temp}°C</p>
        <p>🌡 Feels like: {weather.feelsLike}°C</p>
        <p>☁ Cloud cover: {weather.cloudCover}%</p>
        <p>💨 Wind speed: {weather.windSpeed} km/h</p>
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>🕶 UV Index: {today.uvIndex}</p>
        <p>☀ Sun hours: {today.sunHour}h</p>
        <p>🌑 Moon phase: {today.moonPhase}</p>
      </div>
      <div className="border" />
      <div className="card-body">
        <p>
          {tomorrow.date} - 🌡 Temp: {tomorrow.minTemp}/{tomorrow.maxTemp}°C
        </p>
        <p>
          {afterTomorrow.date} - 🌡 Temp: {afterTomorrow.minTemp}/
          {afterTomorrow.maxTemp}°C
        </p>
      </div>
    </div>
  );
}
