import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import Game from "../routes/Game";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <Header />
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
