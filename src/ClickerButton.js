import React, { useContext, useState } from "react";
import ClickerContext from "./clickerContext";
import "./styles.css";
const ClickerButton = ({ onClick }) => {
  const { handleClick } = useContext(ClickerContext);
  const [isShaking, setIsShaking] = useState(false);
  const shake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  return (
    <div
      className={`cookie ${isShaking && `shake`}`}
      onClick={() => {
        handleClick();
        shake();
      }}
    >
      <div className="cookie_bite"></div>
      <div className="cookie_dotsWrap">
        <div className="cookie_dot"></div>
        <div className="cookie_dot"></div>
        <div className="cookie_dot"></div>
        <div className="cookie_dot"></div>
        <div className="cookie_dot"></div>
        <div className="cookie_dot"></div>
      </div>
    </div>
  );
};

export default ClickerButton;
