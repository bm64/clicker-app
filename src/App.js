import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Home";
import Achievements from "./Achievements";
import Shop from "./Shop";

import AchievementMessage from "./AchievementMessage";

import { ContextProvider } from "./ClickerContext";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <ContextProvider>
        <Navbar />
        <div className="container">
          <AchievementMessage />
          <Switch>
            <Route path="/achievements">
              <Achievements />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>
      </ContextProvider>
    </div>
  );
};

export default App;
