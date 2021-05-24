import React, { useContext } from "react";

import { ClickerContext } from "./ClickerContext";

const AchievementMessage = () => {
  const { message } = useContext(ClickerContext);
  return (
    <div
      className="achievement-message"
      style={{ transform: message && "translate(-50%,-50%)" }}
    >
      <p>Achievement unlocked:</p>
      <span className="achievement">{message}</span>
    </div>
  );
};

export default AchievementMessage;
