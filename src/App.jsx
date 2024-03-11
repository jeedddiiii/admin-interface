import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UserDetail from "./components/Userdetail";
import Transactions from "./components/Transactions";
import Summary from "./components/Summary";
function App() {
  return (
    <Router>
      <div className="app">
        <div>
          <Routes>
            <Route path="/" element={<User />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
