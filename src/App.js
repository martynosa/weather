import { useEffect, useState, useRef } from 'react';
import React from 'react';

import './style.css';
import Card from './Card';
import LoadingCard from './LoadingCard';

export default function App() {

  let inputEl = useRef();
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    return fetch(`https://wttr.in/${location}?format=j1`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setLoading(false);
      });
  }, [location]);

  return <>
    <div className="input-group mb-3">
      <input ref={inputEl} id="locationInput" type="text" className="form-control" placeholder="location..." />
      <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => setLocation(inputEl.current.value)}>Show</button>
    </div>
    {loading
      ? <LoadingCard />
      : <Card weather={weather} />}
  </>

}

