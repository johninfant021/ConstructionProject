import "./main.css";
import Home from "./home.js";
import ConstructionChart from "./ConstructionChart.js";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="header">
        <h1>Building Construction</h1>
      </div>
      <Router>
        <div className="components">
          <Link to="/dashboard" className="li">
            Dashboard
          </Link>
          <Link to="/home" className="li">
            About
          </Link>
          <Link to="/" className="li">
            Resource
          </Link>
          <Link to="/" className="li">
            Clients
          </Link>
        </div>
        <Routes>
          <Route
            path="/dashboard"
            element={<ConstructionChart></ConstructionChart>}
          ></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Main;
