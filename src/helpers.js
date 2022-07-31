function findWeatherDescriptionByCode(code) {
  const WWO_CODE = {
    113: 'Sunny',
    116: 'PartlyCloudy',
    119: 'Cloudy',
    122: 'VeryCloudy',
    143: 'Fog',
    176: 'LightShowers',
    179: 'LightSleetShowers',
    182: 'LightSleet',
    185: 'LightSleet',
    200: 'ThunderyShowers',
    227: 'LightSnow',
    230: 'HeavySnow',
    248: 'Fog',
    260: 'Fog',
    263: 'LightShowers',
    266: 'LightRain',
    281: 'LightSleet',
    284: 'LightSleet',
    293: 'LightRain',
    296: 'LightRain',
    299: 'HeavyShowers',
    302: 'HeavyRain',
    305: 'HeavyShowers',
    308: 'HeavyRain',
    311: 'LightSleet',
    314: 'LightSleet',
    317: 'LightSleet',
    320: 'LightSnow',
    323: 'LightSnowShowers',
    326: 'LightSnowShowers',
    329: 'HeavySnow',
    332: 'HeavySnow',
    335: 'HeavySnowShowers',
    338: 'HeavySnow',
    350: 'LightSleet',
    353: 'LightShowers',
    356: 'HeavyShowers',
    359: 'HeavyRain',
    362: 'LightSleetShowers',
    365: 'LightSleetShowers',
    368: 'LightSnowShowers',
    371: 'HeavySnowShowers',
    374: 'LightSleetShowers',
    377: 'LightSleet',
    386: 'ThunderyShowers',
    389: 'ThunderyHeavyRain',
    392: 'ThunderySnowShowers',
    395: 'HeavySnowShowers',
  };
  return Object.entries(WWO_CODE).find((el) => el[0] === code);
}

export function findIcon(code) {
  const weatherDescription = findWeatherDescriptionByCode(code);
  const WEATHER_SYMBOL = {
    Unknown: '✨',
    Cloudy: '☁️',
    Fog: '🌫',
    HeavyRain: '🌧',
    HeavyShowers: '🌧',
    HeavySnow: '❄️',
    HeavySnowShowers: '❄️',
    LightRain: '🌦',
    LightShowers: '🌦',
    LightSleet: '🌧',
    LightSleetShowers: '🌧',
    LightSnow: '🌨',
    LightSnowShowers: '🌨',
    PartlyCloudy: '⛅️',
    Sunny: '☀️',
    ThunderyHeavyRain: '🌩',
    ThunderyShowers: '⛈',
    ThunderySnowShowers: '⛈',
    VeryCloudy: '☁️',
  };
  return Object.entries(WEATHER_SYMBOL).find(
    (el) => el[0] === weatherDescription[1]
  );
}

export function transformData(weather) {
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
  const date = currCondition.localObsDateTime
    .split(' ')[0]
    .split('-')
    .reverse()
    .join('-');
  const weatherCode = currCondition.weatherCode;
  const description = findIcon(weatherCode);
  const icon = description[1];
  const conditionArr = description[0].match(/[A-Z][a-z]+/g);
  const condition = icon + ' ' + conditionArr.join(' ');

  //today
  const today = weather.weather[0];
  const todayDate = today.date.split('-').reverse().join('-');
  const todayAvgTemp = today.avgtempC;
  const todayMaxTemp = today.maxtempC;
  const todayMinTemp = today.mintempC;
  const todaySunHour = today.sunHour;
  const todayUvIndex = today.uvIndex;
  const todayMoonPhase = today.astronomy[0].moon_phase;

  //tomorrow
  const tomorrow = weather.weather[1];
  const tomorrowDate = tomorrow.date.split('-').reverse().join('-');
  const tomorrowAvgTemp = tomorrow.avgtempC;
  const tomorrowMaxTemp = tomorrow.maxtempC;
  const tomorrowMinTemp = tomorrow.mintempC;
  const tomorrowSunHour = tomorrow.sunHour;
  const tomorrowUvIndex = tomorrow.uvIndex;
  const tomorrowMoonPhase = tomorrow.astronomy[0].moon_phase;

  //after tomorrow
  const afterTomorrow = weather.weather[2];
  const afterTomorrowDate = afterTomorrow.date.split('-').reverse().join('-');
  const afterTomorrowAvgTemp = afterTomorrow.avgtempC;
  const afterTomorrowMaxTemp = afterTomorrow.maxtempC;
  const afterTomorrowMinTemp = afterTomorrow.mintempC;
  const afterTomorrowSunHour = afterTomorrow.sunHour;
  const afterTomorrowUvIndex = afterTomorrow.uvIndex;
  const afterTomorrowMoonPhase = afterTomorrow.astronomy[0].moon_phase;

  return {
    location: {
      area,
      region,
      country,
    },
    data: {
      windSpeed,
      humidity,
      temp,
      feelsLike,
      date,
      condition,
    },
    today: {
      date: todayDate,
      avgTemp: todayAvgTemp,
      maxTemp: todayMaxTemp,
      minTemp: todayMinTemp,
      sunHour: todaySunHour,
      uvIndex: todayUvIndex,
      moonPhase: todayMoonPhase,
    },
    tomorrow: {
      date: tomorrowDate,
      avgTemp: tomorrowAvgTemp,
      maxTemp: tomorrowMaxTemp,
      minTemp: tomorrowMinTemp,
      sunHour: tomorrowSunHour,
      uvIndex: tomorrowUvIndex,
      moonPhase: tomorrowMoonPhase,
    },
    afterTomorrow: {
      date: afterTomorrowDate,
      avgTemp: afterTomorrowAvgTemp,
      maxTemp: afterTomorrowMaxTemp,
      minTemp: afterTomorrowMinTemp,
      sunHour: afterTomorrowSunHour,
      uvIndex: afterTomorrowUvIndex,
      moonPhase: afterTomorrowMoonPhase,
    },
  };
}
