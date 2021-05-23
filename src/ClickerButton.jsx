import React, { useContext, useState } from "react";
import ClickerContext from "./clickerContext";
import "./styles.css";
const ClickerButton = ({ onClick }) => {
  const { handleIncreaseClicks } = useContext(ClickerContext);
  const [shake, setShake] = useState(false);
  const handleShakeAnimation = () => {
    setShake(true);
    setTimeout(() => setShake(false), 300);
  };

  return (
    <div
      className={`cookie ${shake && `shake`}`}
      onClick={() => {
        handleIncreaseClicks();
        handleShakeAnimation();
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
