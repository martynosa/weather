import React from 'react';

export default function SecondaryCard({ weather }) {
  return (
    <div className="card secondary">
      <div className="card-header secondary-header">
        <h4 className="card-date">{weather.date}</h4>
      </div>
      <div className="card-body">
        <p className="card-text">🌡 Average Temp: {weather.avgTemp}°C</p>
        <p className="card-text">☀ Sun hours: {weather.sunHour}h</p>
        <p className="card-text">🕶 UV Index: {weather.uvIndex}</p>
        <p className="card-text">🌑 Moon phase: {weather.moonPhase}</p>
      </div>
    </div>
  );
}
