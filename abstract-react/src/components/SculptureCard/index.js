import React from "react";
import "./SculptureCard.css";

const SculptureCard = (props) => {
  return (
    <div
      className="card"
      onClick={() => props.imagesClicked(props.id)}>   
      <div 
        className="img-container">
        <img alt={props.image} src={(props.image)} style={{width: 150, height: 150}} />
      </div>
    </div>
);
};

export default SculptureCard;