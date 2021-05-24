import React, { useContext } from "react";
import ClickerContext from "./clickerContext";
import { clickingMachines } from "./data";

const Shop = () => {
  const { playerMachines, handleBuyMachine } = useContext(ClickerContext);
  return (
    <div>
      <h1 className="primary-header">Shop</h1>
      <div className="shop__items">
        {Object.entries(clickingMachines).map(([machineName, details]) => (
          <div className="shop__item">
            <h3 key={machineName} className="achievement-name">
              {details.name}
            </h3>
            <div className="icon">{icons[machineName]}</div>
            <div>
              <span className="item__description">
                Cost: {details.cost} cookies
                <br />
                Required Level: {details.requiredLvl}
                <br />
                Cookies Per Second: {details.cps}
              </span>
            </div>
            <button
              className="item__button"
              onClick={() => {
                handleBuyMachine(machineName);
              }}
            >
              Buy {details.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

const icons = {
  cookieFarm: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="cookie"
      className="svg-inline--fa fa-cookie fa-w-15"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
      ></path>
    </svg>
  ),
  cookieFactory: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="industry"
      className="svg-inline--fa fa-industry fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"
      ></path>
    </svg>
  ),
  cookieConjurer: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="hat-wizard"
      className="svg-inline--fa fa-hat-wizard fa-w-16"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z"
      ></path>
    </svg>
  ),
};
