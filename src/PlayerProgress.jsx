import React, { useState, useEffect } from "react";

const storageLvl =
  localStorage.getItem("lvl") != undefined
    ? parseInt(localStorage.getItem("lvl"))
    : 1;

const storageRequirements =
  localStorage.getItem("lvlRequirement") != undefined
    ? parseInt(localStorage.getItem("lvlRequirement"))
    : 10;

const PlayerProgress = ({ clicks }) => {
  const [playerLvl, setPlayerLvl] = useState(storageLvl);
  const [lvlRequirement, setLvlRequirement] = useState(storageRequirements);

  useEffect(() => {
    if (clicks >= 10 && clicks < 20) {
      setPlayerLvl(2);
      localStorage.setItem("lvl", playerLvl);
    }
    else if (clicks / 2 === lvlRequirement) {
      setLvlRequirement(lvlRequirement * 2);
      localStorage.setItem("lvlRequirement", lvlRequirement);
      setPlayerLvl(playerLvl + 1);
      localStorage.setItem("lvl", playerLvl);
    }
  }, [clicks]);

  return (
    <div>
      <h2>{clicks}</h2>
      <h2>Your lvl: {playerLvl}</h2>
    </div>
  );
};

export default PlayerProgress;
