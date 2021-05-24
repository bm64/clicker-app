import React, { useContext } from "react";

import ClickerContext from "./ClickerContext";

const PlayerProgress = ({ children }) => {
  const { clicks, playerLvl, lvlRequirement } = useContext(ClickerContext);
  return (
    <div className="player-progress">
      <h1 className="primary-header">
        {Number.isInteger(clicks) ? clicks : clicks.toFixed(0)}
        <br />
        {clicks === 1 ? "Cookie" : "Cookies"}
      </h1>
      {children}
      <h2 className="player-lvl">Your Level: {playerLvl}</h2>
      <p>Cookies required for next level: {lvlRequirement}</p>
    </div>
  );
};

export default PlayerProgress;
