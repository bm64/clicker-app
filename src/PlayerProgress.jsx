import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "./clickerContext";

const PlayerProgress = () => {
  const { clicks, playerLvl, lvlRequirement } = useContext(ClickerContext)
  return (
    <div>
      <h2>{
      Number.isInteger(clicks) ? clicks : 
      clicks.toFixed(1)}</h2>
      <h2>Your lvl:{playerLvl}</h2>
        <h4>Clicks required for next lvl: {lvlRequirement}</h4>

    </div>
  );
};

export default PlayerProgress;
