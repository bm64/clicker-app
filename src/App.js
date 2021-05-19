import "./styles.css";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Achievements from "./achievements";
import Shop from "./shop";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
