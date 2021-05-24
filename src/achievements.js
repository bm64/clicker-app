import React, { useContext } from "react";
import ClickerContext from "./clickerContext";
import { achievements as allAchievements } from "./data";

const Achievements = () => {
  const { playerAchievements } = useContext(ClickerContext);
  const achievements = Object.entries(allAchievements);
  return (
    <div>
      <h1 className="primary-header">Achievements</h1>
      <div className="achievements">
        <div>
          <h2>Unlocked Achievements:</h2>
          <div className="divider" />
          {achievements
            .filter(([achievement, details]) =>
              playerAchievements.includes(achievement)
            )
            .map(([achievement, details]) => (
              <div>
                <h3 className="achievement-name">{details.name}</h3>
                <span className="achievement-description">
                  {details.description}
                </span>
              </div>
            ))}
        </div>
        <div>
          <h2>Locked Achievements</h2>
          <div className="divider" />
          {Object.entries(allAchievements)
            .filter(
              ([achievement, details]) =>
                !playerAchievements.includes(achievement)
            )
            .map(([achievement, details]) => (
              <div>
                <h3 className="achievement-name">{details.name}</h3>
                <span className="achievement-description">
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
