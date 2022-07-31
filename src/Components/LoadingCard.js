import React from 'react';

export default function LoadingCard({ type }) {
  return (
    <div className={`card ${type}`}>
      <div className={`card-header ${type}-header`}>
        <h4 className="card-date">&nbsp;</h4>
        <h5 className="card-weather-description">&nbsp;</h5>
      </div>
      <div className="card-body">
        <p className="card-text">&nbsp;</p>
        <p className="card-text">&nbsp;</p>
        <p className="card-text">&nbsp;</p>
        <p className="card-text">&nbsp;</p>
        <p className="card-text">&nbsp;</p>
      </div>
    </div>
  );
}
