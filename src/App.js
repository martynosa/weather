import React from "react";
import { useEffect, useState } from "react";

import "./style.css";
import Input from "./Components/Input";
import RegionTitle from "./Components/RegionTitle";
import LoadingCard from "./Components/LoadingCard";
import Card from "./Components/Card";
import { transformData } from "./helpers";

export default function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://wttr.in/${location}?format=j1`)
      .then((res) => res.json())
      .then((result) => {
        const transformedData = transformData(result);
        document.title = transformedData.data.condition;
        setWeather(transformedData);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [location]);

  return (
    <>
      <div className="container">
        <Input setLocation={setLocation} />
        {error && (
          <p className="error">Internal error. Please try again later.</p>
        )}
        <RegionTitle location={weather.location} loading={loading} />
        {loading && <LoadingCard />}
        {!loading && (
          <Card
            weather={weather.data}
            today={weather.today}
            tomorrow={weather.tomorrow}
            afterTomorrow={weather.afterTomorrow}
          />
        )}
      </div>
    </>
  );
}
