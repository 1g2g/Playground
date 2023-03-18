import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Game from "../routes/Game";
import Header from "../components/Header";
import { nicknameProps } from "./App";
const AppRouter: React.FC<nicknameProps> = ({ nickname }) => {
  return (
    <Router>
      <div className="container">
        <Header nickname={nickname} />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </>
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;
