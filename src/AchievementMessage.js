import React, { useState, useContext } from "react";
import "./styles.css";
import ClickerContext from "./clickerContext";
import { achievements } from "./data";

const AchievementMessage = () => {
  const { message } = useContext(ClickerContext);
  return (
    <div
      className="achievementMessage"
      style={{ transform: message && "translate(-50%,-50%)" }}
    >
      {message}
    </div>
  );
};

export default AchievementMessage;
