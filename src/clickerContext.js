import React, { useState, createContext, useEffect, createRef } from "react";

import { clickingMachines, achievements as allAchievements } from "./data";

export const ClickerContext = createContext();

// load data from local storage
const loadIntOrDefault = (key, defaultValue = 0) => {
  return localStorage.getItem(key) !== null
    ? parseInt(localStorage.getItem(key), 10)
    : defaultValue;
};

const loadArrOrDefault = (key, defaultValue = []) => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
};

const storageClicks = loadIntOrDefault("clicks");
const storageLvl = loadIntOrDefault("lvl", 1);
const storageRequirements = loadIntOrDefault("lvlRequirement", 10);
const storageAchievements = loadArrOrDefault("achievements");
const storageMachines = loadArrOrDefault("machines");

export const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState(storageClicks);
  const [playerLvl, setPlayerLvl] = useState(storageLvl);
  const [lvlRequirement, setLvlRequirement] = useState(storageRequirements);
  const [playerAchievements, setPlayerAchievements] =
    useState(storageAchievements);
  const [message, setMessage] = useState(null);
  const [playerMachines, setPlayerMachines] = useState(storageMachines);

  const timeoutRef = createRef();
  const intervalRef = createRef();

  // sum up cps(clicks per second)
  useEffect(() => {
    let cps = 0;
    if (playerMachines.length < 1) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    for (const machine of playerMachines) {
      cps = cps + clickingMachines[machine].cps;
    }

    intervalRef.current = setInterval(() => {
      setClicks((cx) => cx + cps / 10);
    }, 100);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [playerMachines]);

  const handleBuyMachine = (machineName) => {
    const machine = clickingMachines?.[machineName];
    if (!machine) return;

    if (machine.cost <= clicks && machine.requiredLvl <= playerLvl) {
      setPlayerMachines([...playerMachines, machineName]);
      setClicks(clicks - machine.cost);
    }
  };

  // update local storage
  useEffect(() => {
    localStorage.setItem("machines", JSON.stringify(playerMachines));
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("lvl", playerLvl);
    localStorage.setItem("lvlRequirement", lvlRequirement);
    localStorage.setItem("achievements", JSON.stringify(playerAchievements));
  }, [playerMachines, clicks, playerLvl, lvlRequirement, playerAchievements]);

  // update lvl requirement
  useEffect(() => {
    if (clicks >= lvlRequirement) {
      setLvlRequirement(lvlRequirement * 2);
      setPlayerLvl((playerLvl) => playerLvl + 1);
    }
  }, [clicks, lvlRequirement]);

  // achievement earning logic
  useEffect(() => {
    const achievements = Object.entries(allAchievements);
    for (const [achievement, details] of achievements) {
      const requirements = Object.entries(details.requirement);

      for (const [type, requirement] of requirements) {
        if (playerAchievements.includes(achievement)) continue;

        const value = type === "clicks" ? clicks : playerLvl;
        if (value >= requirement) {
          showMessage(details.name);
          setPlayerAchievements([...playerAchievements, achievement]);
        }
      }
    }
  }, [clicks, playerLvl]);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const showMessage = (message) => {
    if (timeoutRef.current) {
      timeoutRef.current = setTimeout(() => showMessage(message), 3000);
      return;
    }

    setMessage(message);
    timeoutRef.current = setTimeout(() => {
      setMessage(null);
      timeoutRef.current = null;
    }, 3000);
  };

  const clearProgress = () => {
    localStorage.clear();
    setClicks(0);
    setPlayerLvl(1);
    setLvlRequirement(10);
    setPlayerAchievements([]);
    setPlayerMachines([]);
  };

  const contextValues = {
    clicks,
    handleClick,
    clearProgress,
    playerLvl,
    playerAchievements,
    message,
    playerMachines,
    handleBuyMachine,
    lvlRequirement,
  };
  return (
    <ClickerContext.Provider value={contextValues}>
      {children}
    </ClickerContext.Provider>
  );
};
