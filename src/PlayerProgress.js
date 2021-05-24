import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "./clickerContext";

const PlayerProgress = ({ children }) => {
  const { clicks, playerLvl, lvlRequirement } = useContext(ClickerContext);
  return (
    <div className="player-progress">
      <h1 className="cookies-count">
        {Number.isInteger(clicks) ? clicks : clicks.toFixed(1)}
        <br />
        {clicks === 1 ? "Cookie" : "Cookies"}
      </h1>
      {children}
      <h2 className="player-lvl">Your lvl: {playerLvl}</h2>
      <p>Cookies required for next lvl: {lvlRequirement}</p>
    </div>
  );
};
export default PlayerProgress;
