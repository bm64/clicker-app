import React, { useContext } from "react";
import ClickerContext from "./clickerContext";
import achievementlist from "./achievementList";
import { isConstructorDeclaration } from "typescript";
console.log(Object.entries(achievementlist));

const Achievements = () => {
  const { playerAchievements } = useContext(ClickerContext);
  console.log(playerAchievements);
  console.log(
    Object.entries(achievementlist).filter(([key, item]) =>
      playerAchievements.includes(key)
    )
  );
  console.log(Object.entries(achievementlist));
  return (
    <div>
      <h1>Achievements</h1>
      <h1>Unlocked Achievements</h1>
      {Object.entries(achievementlist)
        .filter(([key, item]) => playerAchievements.includes(key))
        .map(([key, item]) => (
          <h3>{key}</h3>
        ))}
      <h1>Locked Achievements</h1>
      {Object.entries(achievementlist)
        .filter(([key, item]) => !playerAchievements.includes(key))
        .map(([key, item]) => (
          <h3>{key}</h3>
        ))}
    </div>
  );
};

export default Achievements;
