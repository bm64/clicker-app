import "./styles.css";
import Navbar from "./Navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import Achievements from "./achievements";
import Shop from "./shop";
import { ContextProvider } from "./clickerContext";
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
