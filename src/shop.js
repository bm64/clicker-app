import React, { useContext } from "react";
import ClickerContext from "./clickerContext";
import { clickingMachines } from "./data";

const Shop = () => {
  const { playerMachines, handleBuyMachine } = useContext(ClickerContext);
  return (
    <div>
      <h1>Shop</h1>
      {Object.entries(clickingMachines).map(([machineName, description]) => (
        <div>
          <h2 key={machineName}>{machineName}</h2>
          <button
            onClick={() => {
              handleBuyMachine(machineName);
            }}
          >
            Buy
          </button>
        </div>
      ))}
      {/*
      <h1>You machines:</h1>
      {playerMachines.map((machine) => (
        <h3>{machine}</h3>
      ))}*/}
    </div>
  );
};

export default Shop;
