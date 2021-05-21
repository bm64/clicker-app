import React, { useEffect, useState, useContext } from "react";
import ClickerButton from "./ClickerButton";
import PlayerProgress from "./PlayerProgress";
import ClickerContext from "./clickerContext";

const Home = () => {
  const { clearProgress } = useContext(ClickerContext);

  return (
    <div>
      <h1>Home</h1>
      <PlayerProgress />
      <ClickerButton />
      <button onClick={clearProgress}>clear</button>
    </div>
  );
};

export default Home;
