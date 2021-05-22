import React, { useState, useContext } from "react";
import "./styles.css";
import ClickerContext from "./clickerContext";

const AchievementMessage = () => {
    const {showMessage} = useContext(ClickerContext)
  return <div className="achievementMessage"
    style={{transform: showMessage && 'translate(-50%,-50%)'}}    
  >zdobyles achiv byku</div>;
};

export default AchievementMessage;
