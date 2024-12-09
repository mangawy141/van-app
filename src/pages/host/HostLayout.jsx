import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <main>
      <div className="container">
        <nav className="flex-align-center host-nav">
          <NavLink className="host-link" end to=".">
            Dashboard
          </NavLink>
          <NavLink className="host-link" to="income">
            Income
          </NavLink>
          <NavLink className="host-link" to="vans">
            Vans
          </NavLink>
          <NavLink className="host-link" to="reviews">
            Reviews
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </main>
  );
}

export default HostLayout;
