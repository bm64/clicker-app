import React, { useContext, useMemo } from "react";

import { ClickerContext } from "./ClickerContext";

import { achievements as allAchievements } from "./data";

const Achievements = () => {
  const { playerAchievements } = useContext(ClickerContext);

  const [unlockedAchievments, notUnlockedAchievments] = useMemo(() => {
    const entries = Object.entries(allAchievements);

    const unlocked = [];
    const notUnlocked = [];

    for (const achievement of entries) {
      const [name] = achievement;

      if (playerAchievements.includes(name)) unlocked.push(achievement);
      else notUnlocked.push(achievement);
    }

    return [unlocked, notUnlocked];
  }, [playerAchievements]);

  return (
    <div>
      <h1 className="header">Achievements</h1>
      <div className="achievements">
        <div>
          <h2>Unlocked Achievements:</h2>
          <div className="divider" />
          {unlockedAchievments.map(([achievement, details]) => (
            <div key={achievement}>
              <h3 className="item__name">{details.name}</h3>
              <span className="achievement__description">
                {details.description}
              </span>
            </div>
          ))}
        </div>
        <div>
          <h2>Locked Achievements</h2>
          <div className="divider" />
          {notUnlockedAchievments.map(([achievement, details]) => (
            <div key={achievement}>
              <h3 className="item__name">{details.name}</h3>
              <span className="achievement__description">
                {details.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
