import React from 'react';
import './CardOverlay.css'; // Create a CSS file for styling

const CardOverlay = (props) => {
  return (
    <div className="card-overlay">
      <div className="left">
        <img src={props.leftImage} alt="Left" />
      </div>
      <div className="right">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <img className="overlay-image" src={"../src/assets/projectcard.png"} alt="Overlay" />
    </div>
  );
};

export default CardOverlay;