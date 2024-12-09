import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetails";
import Layout from "./ui/Layout";
import HostLayout from "./pages/host/HostLayout";
import HostIncome from "./pages/host/HostIncome";
import HostReviews from "./pages/host/HostReviews";
import HostVans from "./pages/host/HostVans";
import HostDashboard from "./pages/host/HostDashboard";
import NotFound from "./pages/notFound/NotFound";
import HostVansDetails from "./pages/host/HostVansDetails";
import HostVansDetails_info from "./pages/host/HostVansDetails_info";
import HostVansDetails_pricing from "./pages/host/HostVansDetails_pricing";
import HostVansDetails_photos from "./pages/host/HostVansDetails_photos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path="vanDetails/:id" element={<VanDetails />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostVansDetails />}>
                <Route index element={<HostVansDetails_info />} />
                <Route path="pricing" element={<HostVansDetails_pricing />} />
                <Route path="photos" element={<HostVansDetails_photos />} />
              </Route>
            </Route>
            <Route path="reviews" element={<HostReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
