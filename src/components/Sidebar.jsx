import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link className="sidebar-tab" to="/">Overview</Link>
      <Link className="sidebar-tab"to="/adduser">Add User</Link>
      <Link className="sidebar-tab"to="/transactions">Transactions</Link>
      <Link className="sidebar-tab"to="/travel">Travel</Link>
      <Link className="sidebar-tab"to="/summary">Summary</Link>
    </div>
  );
}

export default Sidebar;