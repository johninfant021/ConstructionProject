import Homepage from "./Components/hompage";
import Sign from "./Components/sign";
import Login from "./Components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConstructionChart from "./Components/ConstructionChart";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} />
            <Route path="/sign" element={<Sign />} /> 

            <Route path="/homepage" element={<Homepage />} />*/}
          </Routes>
        </Router>
        <ConstructionChart />
      </div>
    </>
  );
}
export default App;
