import "./styles.css";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Achievements from "./Achievements";
import Shop from "./Shop";
import { ContextProvider } from "./ClickerContext";
import AchievementMessage from "./AchievementMessage";

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
