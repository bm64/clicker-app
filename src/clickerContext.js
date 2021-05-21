import React, { useState, createContext, useEffect } from "react";

const ClickerContext = createContext();
export default ClickerContext;

const storageClicks =
  localStorage.getItem("clicks") != undefined
    ? parseInt(localStorage.getItem("clicks"))
    : 0;

const storageLvl =
  localStorage.getItem("lvl") != undefined
    ? parseInt(localStorage.getItem("lvl"))
    : 1;

const storageRequirements =
  localStorage.getItem("lvlRequirement") != undefined
    ? parseInt(localStorage.getItem("lvlRequirement"))
    : 10;

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState(storageClicks);

  const [playerLvl, setPlayerLvl] = useState(storageLvl);
  const [lvlRequirement, setLvlRequirement] = useState(storageRequirements);

  useEffect(() => {
    if (clicks >= 10 && clicks < 20) {
      setPlayerLvl(2);
    } else if (clicks / 2 === lvlRequirement) {
      setLvlRequirement(lvlRequirement * 2);
      setPlayerLvl(playerLvl + 1);
    }
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem("clicks", clicks);
    console.log(localStorage.getItem("clicks"));
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem("lvl", playerLvl);
    localStorage.setItem("lvlRequirement", lvlRequirement);
  }, [playerLvl, setLvlRequirement]);

  const handleIncreaseClicks = () => {
    setClicks(clicks + 1);
  };

  const clearProgress = () => {
    localStorage.clear();
    setClicks(0);
    setPlayerLvl(1);
  };

  const value = {
    clicks,
    handleIncreaseClicks,
    clearProgress,
    playerLvl,
  };
  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
