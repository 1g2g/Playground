import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../routes/Home";
import Game from "../routes/Game";
import Header from "../components/Header";
const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/game">
            <Game />
          </Route>
        </>
      </Switch>
    </Router>
  );
};
export default AppRouter;
