import React from 'react';

export default function LoadingCard({ type }) {
  return (
    <div className={`card ${type}`}>
      <div className={`card-header ${type}-header`}>
        <h4 className="card-date loading-header">&nbsp;</h4>
        <h5 className="card-weather-description loading-header">&nbsp;</h5>
      </div>
      <div className="card-body">
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
      </div>
      <div className="border" />
      <div className="card-body">
        <p className="card-text loading">&nbsp;</p>
        <p className="card-text loading">&nbsp;</p>
      </div>
    </div>
  );
}
