import React, { useContext, useState } from "react";

import ClickerContext from "./ClickerContext";

const ClickerButton = () => {
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
      <div className="cookie-bite"></div>
      <div className="cookie-dotsWrap">
        <div className="cookie-dot"></div>
        <div className="cookie-dot"></div>
        <div className="cookie-dot"></div>
        <div className="cookie-dot"></div>
        <div className="cookie-dot"></div>
        <div className="cookie-dot"></div>
      </div>
    </div>
  );
};

export default ClickerButton;
