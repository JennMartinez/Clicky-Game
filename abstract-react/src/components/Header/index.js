import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.title}
        </div>
        <div className="scoring">
            Score: {props.score} 
        </div>
        <br></br>
        <div className="high">
            High Score: {props.highScore}
        </div>
    </div>
);

export default Header;