import React, { useState, createContext, useEffect } from "react";
import achievementlist from "./achievementList";

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

const storageAchievements =
  localStorage.getItem("achievements") != undefined
    ? JSON.parse(localStorage.getItem("achievements"))
    : [];

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState(storageClicks);
  const [playerLvl, setPlayerLvl] = useState(storageLvl);
  const [lvlRequirement, setLvlRequirement] = useState(storageRequirements);
  const [playerAchievements, setPlayerAchievements] =
    useState(storageAchievements);
  console.log(playerAchievements);
  const [showMessage, setShowMessage] = useState(false);

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

  //achievements handle useEffect

  useEffect(() => {
    for (const [achievement, achievementDetails] of Object.entries(
      achievementlist
    )) {
      for (const [type, requirement] of Object.entries(
        achievementDetails.requirement
      )) {
        console.log(type + requirement);
        if (
          type === "clicks" &&
          clicks >= requirement &&
          !playerAchievements.includes(achievement)
        ) {
          handleShowsMessage();
          setPlayerAchievements([...playerAchievements, achievement]);
        } else if (
          type === "level" &&
          playerLvl >= requirement &&
          !playerAchievements.includes(achievement)
        ) {
          handleShowsMessage();
          setPlayerAchievements([...playerAchievements, achievement]);
        }
      }
    }
  }, [clicks, playerLvl]);

  const handleIncreaseClicks = () => {
    setClicks(clicks + 1);
  };

  const handleShowsMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  useEffect(() => {
    localStorage.setItem("achievements", JSON.stringify(playerAchievements));
  }, [playerAchievements]);

  const clearProgress = () => {
    localStorage.clear();
    setClicks(0);
    setPlayerLvl(1);
    setLvlRequirement(10);
    setPlayerAchievements([]);
  };

  const value = {
    clicks,
    handleIncreaseClicks,
    clearProgress,
    playerLvl,
    playerAchievements: [...playerAchievements],
    showMessage,
  };
  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
