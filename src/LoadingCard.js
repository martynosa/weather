import React from 'react';

export default function LoadingCard() {

    return <div className="card border-dark mb-3 placeholder-glow" style={{ width: "20rem" }}>
        <div className="card-header">
            <h4 className="card-title placeholder placeholder-lg">area + region + country</h4>
            <h5 className="card-title placeholder placeholder-lg">icon + conditon</h5>
        </div>
        <div className="card-body text-dark">
            <p className="card-text placeholder placeholder-lg  col-6"></p>
            <p className="card-text placeholder placeholder-lg  col-10"></p>
            <p className="card-text placeholder placeholder-lg  col-8"></p>
            <p className="card-text placeholder placeholder-lg  col-12"></p>
        </div>
    </div>;

}
