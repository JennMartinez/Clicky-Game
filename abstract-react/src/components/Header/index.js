import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <div className="title">{props.children}
        </div>
        <div className="scoring">
            Score: {props.score} 
            High Score: {props.highScore}
        </div>
    </div>
);

export default Header;