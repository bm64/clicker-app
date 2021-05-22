import { createContext, useState } from "react";
import "./styles.css";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Achievements from "./achievements";
import Shop from "./shop";
import { ContextProvider } from "./clickerContext";
import AchievementMessage from "./AchievementMessage";

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <AchievementMessage />
        <Navbar />
        <Switch>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ContextProvider>
    </div>
  );
};

export default App;
