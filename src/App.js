import React from 'react';
import { useEffect, useState } from 'react';

import './style.css';
import PrimaryCard from './Components/PrimaryCard';
import LoadingCard from './Components/LoadingCard';
import Input from './Components/Input';
import SecondaryCard from './Components/SecondaryCard';
import { transformData } from './helpers';
import RegionTitle from './Components/RegionTitle';

export default function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

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
      <div className="container">
        <Input setLocation={setLocation} />
        <RegionTitle location={weather.location} loading={loading} />
        {loading ? (
          <LoadingCard type={'primary'} />
        ) : (
          <PrimaryCard weather={weather.data} />
        )}
        <div className="cards-container">
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard weather={weather.today} />
          )}
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard weather={weather.tomorrow} />
          )}
          {loading ? (
            <LoadingCard type={'secondary'} />
          ) : (
            <SecondaryCard weather={weather.afterTomorrow} />
          )}
        </div>
      </div>
    </>
  );
}
