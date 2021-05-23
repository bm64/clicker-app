import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "./clickerContext";

const PlayerProgress = () => {
  const { clicks, playerLvl } = useContext(ClickerContext)
  console.log(typeof clicks)
  return (
    <div>
      <h2>{
      Number.isInteger(clicks) ? clicks : 
      clicks.toFixed(1)}</h2>
      <h2>Your lvl:{playerLvl}</h2>
    </div>
  );
};

export default PlayerProgress;
