import { Outlet } from "react-router-dom";

import PageNav from "./PageNav";
import PageFooter from "./PageFooter";

function Layout() {
  return (
    <div className="layout">
      <PageNav />
      <Outlet />
      <PageFooter />
    </div>
  );
}

export default Layout;
