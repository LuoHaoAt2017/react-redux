import { Outlet, NavLink } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="menus">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          首页
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          关于
        </NavLink>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
