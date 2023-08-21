import React from "react";

export default function RegionTitle({ location, loading }) {
  const regionTitle = (
    <h1>{`${location?.area} ${location?.region} ${location?.country}`}</h1>
  );
  const loadingTitle = <h1 className="loading-title">&nbsp;</h1>;
  return loading ? loadingTitle : regionTitle;
}
