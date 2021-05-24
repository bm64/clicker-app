import React, { useContext } from "react";
import ClickerButton from "./ClickerButton";
import PlayerProgress from "./PlayerProgress";
import ClickerContext from "./clickerContext";

const Home = () => {
  const { clearProgress, playerMachines } = useContext(ClickerContext);

  return (
    <div className="home">
      <PlayerProgress>
        <ClickerButton />
      </PlayerProgress>
      <button className="clear-button" onClick={clearProgress}>
        Reset your progress
      </button>
    </div>
  );
};

export default Home;
