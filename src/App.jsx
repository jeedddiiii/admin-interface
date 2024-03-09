import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import Overview from "./components/Overview";
import UserDetail from "./components/Userdetail";
import Transactions from "./components/Transactions";
import Chart from "./components/Chart";
function App() {
  return (
    <Router>
      <div className="app">
        <div>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
