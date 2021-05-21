import React, { useState, useEffect, useContext } from "react";
import ClickerContext from "./clickerContext";

const PlayerProgress = ({ clicks, playerLvl }) => {
  return (
    <div>
      <h2>{clicks}</h2>
      <h2>Your lvl:{playerLvl}</h2>
    </div>
  );
};

export default PlayerProgress;
