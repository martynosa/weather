import React from 'react';

export default function Card({ weather }) {

    //location
    const nearestLocation = weather.nearest_area[0];
    const area = nearestLocation.areaName[0].value;
    const region = nearestLocation.region[0].value;
    const country = nearestLocation.country[0].value;
    //data
    const currCondition = weather.current_condition[0];
    const windSpeed = currCondition.windspeedKmph;
    const humidity = currCondition.humidity;
    const temp = currCondition.temp_C;
    const feelsLike = currCondition.FeelsLikeC;
    //icon, conditon and img
    const weatherCode = currCondition.weatherCode;
    const description = findIcon(weatherCode);
    const icon = description[1];
    const conditionArr = description[0].match(/[A-Z][a-z]+/g);

    function findWeatherDescriptionByCode(code) {
        const WWO_CODE = {
            "113": "Sunny",
            "116": "PartlyCloudy",
            "119": "Cloudy",
            "122": "VeryCloudy",
            "143": "Fog",
            "176": "LightShowers",
            "179": "LightSleetShowers",
            "182": "LightSleet",
            "185": "LightSleet",
            "200": "ThunderyShowers",
            "227": "LightSnow",
            "230": "HeavySnow",
            "248": "Fog",
            "260": "Fog",
            "263": "LightShowers",
            "266": "LightRain",
            "281": "LightSleet",
            "284": "LightSleet",
            "293": "LightRain",
            "296": "LightRain",
            "299": "HeavyShowers",
            "302": "HeavyRain",
            "305": "HeavyShowers",
            "308": "HeavyRain",
            "311": "LightSleet",
            "314": "LightSleet",
            "317": "LightSleet",
            "320": "LightSnow",
            "323": "LightSnowShowers",
            "326": "LightSnowShowers",
            "329": "HeavySnow",
            "332": "HeavySnow",
            "335": "HeavySnowShowers",
            "338": "HeavySnow",
            "350": "LightSleet",
            "353": "LightShowers",
            "356": "HeavyShowers",
            "359": "HeavyRain",
            "362": "LightSleetShowers",
            "365": "LightSleetShowers",
            "368": "LightSnowShowers",
            "371": "HeavySnowShowers",
            "374": "LightSleetShowers",
            "377": "LightSleet",
            "386": "ThunderyShowers",
            "389": "ThunderyHeavyRain",
            "392": "ThunderySnowShowers",
            "395": "HeavySnowShowers",
        };
        return Object.entries(WWO_CODE).find(el => el[0] === code);
    }

    function findIcon(code) {
        const weatherDescription = findWeatherDescriptionByCode(code);
        const WEATHER_SYMBOL = {
            "Unknown": "✨",
            "Cloudy": "☁️",
            "Fog": "🌫",
            "HeavyRain": "🌧",
            "HeavyShowers": "🌧",
            "HeavySnow": "❄️",
            "HeavySnowShowers": "❄️",
            "LightRain": "🌦",
            "LightShowers": "🌦",
            "LightSleet": "🌧",
            "LightSleetShowers": "🌧",
            "LightSnow": "🌨",
            "LightSnowShowers": "🌨",
            "PartlyCloudy": "⛅️",
            "Sunny": "☀️",
            "ThunderyHeavyRain": "🌩",
            "ThunderyShowers": "⛈",
            "ThunderySnowShowers": "⛈",
            "VeryCloudy": "☁️",
        };
        return Object.entries(WEATHER_SYMBOL).find(el => el[0] === weatherDescription[1]);
    }

    return <div className="card border-dark mb-3" style={{ width: "20rem" }}>
        <div className="card-header">
            <h4>{area + ' ' + region + ' ' + country}</h4>
            <h5 className="card-title">{icon + ' ' + conditionArr.join(' ')}</h5>
        </div>
        <div className="card-body text-dark">
            <p className="card-text">🌡 Temp: {temp}°C</p>
            <p className="card-text">🌡 Feels like: {feelsLike}°C</p>
            <p className="card-text">💧 Humidity: {humidity}%</p>
            <p className="card-text">☴ Wind speed: {windSpeed} km/h</p>
        </div>
    </div>

}