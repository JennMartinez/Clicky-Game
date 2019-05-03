import React from "react";
import "./SculptureCard.css";

const SculptureCard = props => {
    return (
    <div
        className="card"
        onclick={props.imagesClicked}>   
        <div 
            className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={(props.image)} />
        </div>
        <ul>
          <li>
            <strong>Name:</strong> {props.image}
          </li>
        </ul>
      </div>
    );
};

export default SculptureCard;