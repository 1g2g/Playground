import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../routes/Home";
import Game from "../routes/Game";
import Header from "../components/Header";
import { nicknameProps } from "./App";
const AppRouter: React.FC<nicknameProps> = ({ nickname }) => {
  return (
    <Router>
      <Header nickname={nickname} />
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
