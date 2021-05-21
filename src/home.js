import React, { useEffect, useState, useContext } from "react";
import ClickerButton from "./ClickerButton";
import PlayerProgress from "./PlayerProgress";
import ClickerContext from "./clickerContext";

const storageClicks =
  localStorage.getItem("clicks") != undefined
    ? parseInt(localStorage.getItem("clicks"))
    : 0;

const Home = () => {
  const [clicks, handleIncreaseClicks, clearProgress, playerLvl] =
    useContext(ClickerContext);

  return (
    <div>
      <h1>Home</h1>
      <PlayerProgress clicks={clicks} playerLvl={playerLvl} />
      <ClickerButton onClick={handleIncreaseClicks} />
      <button onClick={clearProgress}>clear</button>
    </div>
  );
};

export default Home;
