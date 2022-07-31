import React from 'react';
import { useEffect, useState } from 'react';

import './style.css';
import ClickCounter from './Components/ClickCounter';
import Input from './Components/Input';
import RegionTitle from './Components/RegionTitle';
import LoadingCard from './Components/LoadingCard';
import PrimaryCard from './Components/PrimaryCard';
import SecondaryCard from './Components/SecondaryCard';
import { transformData } from './helpers';

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const clickHandler = () => {
    setClicks((prevState) => {
      return prevState + 1;
    });
    console.log(clicks);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://wttr.in/${location}?format=j1`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(transformData(result));
        setLoading(false);
      });
  }, [location]);

  return (
    <>
      <ClickCounter clicks={clicks} />
      <div className="container">
        <Input setLocation={setLocation} />
        <RegionTitle location={weather.location} loading={loading} />
        {loading ? (
          <LoadingCard type={'primary'} />
        ) : (
          <PrimaryCard weather={weather.data} clickHandler={clickHandler} />
        )}
        <div className="cards-container">
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard
              weather={weather.today}
              clickHandler={clickHandler}
            />
          )}
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard
              weather={weather.tomorrow}
              clickHandler={clickHandler}
            />
          )}
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard
              weather={weather.afterTomorrow}
              clickHandler={clickHandler}
            />
          )}
        </div>
      </div>
    </>
  );
}
