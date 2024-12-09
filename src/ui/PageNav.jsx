import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

function PageNav() {
  const location = useLocation();
  const vanDetailsLocation = location.pathname.match(
    /^\/vans\/vanDetails\/\d+$/
  );
  const { selectedVan } = useSelector((store) => store.vans);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1 title="vanlife homepage">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return !isActive && vanDetailsLocation
                  ? `${selectedVan?.type}-text`
                  : undefined;
              }}
              end
            >
              #VANLIFE
            </NavLink>
          </h1>
        </div>
        <nav>
          <ul>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default PageNav;
