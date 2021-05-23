import React, { useState, createContext, useEffect, createRef } from "react";
import { clickingMachines, achievements as achievementlist } from "./data";

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

const storageMachines =
  localStorage.getItem("machines") != undefined
    ? JSON.parse(localStorage.getItem("machines"))
    : [];

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState(storageClicks);
  const [playerLvl, setPlayerLvl] = useState(storageLvl);
  const [lvlRequirement, setLvlRequirement] = useState(storageRequirements);
  const [playerAchievements, setPlayerAchievements] =
    useState(storageAchievements);
  const [showMessage, setShowMessage] = useState(false);
  const [playerMachines, setPlayerMachines] = useState(storageMachines);
  const intervalRef = createRef();

  console.log(playerMachines);
  //sum up cps and function
  useEffect(() => {
    let cps = 0;
    if (playerMachines.length > 0) {
      playerMachines.forEach((machine) => {
        cps = cps + clickingMachines[machine].cps;
      });
    }

    if (playerMachines.length > 0) {
      intervalRef.current = setInterval(() => {
        setClicks((cx) => cx + cps / 10);
      }, 100);
      return () => {
        clearInterval(intervalRef.current);
      };
    }
  }, [playerMachines]);

  const handleBuyMachine = (machine) => {
    for (const [machineName, machineSpecs] of Object.entries(
      clickingMachines
    )) {
      if (
        machine == machineName &&
        machineSpecs.cost <= clicks &&
        machineSpecs.requiredLvl <= playerLvl
      ) {
        setPlayerMachines([...playerMachines, machineName]);
        setClicks(clicks - machineSpecs.cost);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("machines", JSON.stringify(playerMachines));
  }, [playerMachines]);

  useEffect(() => {
    if (clicks >= lvlRequirement) {
      setLvlRequirement(lvlRequirement * 2);
      setPlayerLvl(playerLvl + 1);
    }
  }, [clicks]);

  useEffect(() => {
    localStorage.setItem("clicks", clicks);
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
    setPlayerMachines([]);
  };

  const value = {
    clicks,
    handleIncreaseClicks,
    clearProgress,
    playerLvl,
    playerAchievements: [...playerAchievements],
    showMessage,
    playerMachines,
    handleBuyMachine,
    lvlRequirement,
  };
  return (
    <ClickerContext.Provider value={value}>{children}</ClickerContext.Provider>
  );
};
