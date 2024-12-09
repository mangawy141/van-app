import { useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import BackLink from "../../ui/BackLink";
import Spinner from "../../ui/Spinner";

export default function HostVansDetails() {
  const { id } = useParams();

  const rentedVan = useSelector((store) => store.host?.listedHosts).find(
    (listedVan) => listedVan.id === id,
  );

  const { name, price, type, imageUrl } = rentedVan || {};

  const isLoading = useSelector((store) => store.host?.isLoading);

  if (isLoading) return <Spinner />;

  if (!rentedVan) return <h1 className="text-center">Van not found.</h1>;

  return (
    <div className="container">
      <BackLink />
      <div className="my-9 rounded-md bg-white p-6">
        <div className="my-6 flex items-center gap-6">
          <img
            src={imageUrl}
            alt={name}
            className="block h-[160px] w-[160px] rounded-md"
          />
          <div className="space-y-2">
            <div
              className={`${type}-type w-fit rounded-md px-4 py-2 text-center text-sm font-semibold text-white`}
            >
              {type}
            </div>
            <h1 className="text-3xl font-bold text-text-color-secondary">
              {name}
            </h1>
            <h2 className="text-base font-medium">
              $<span className="font-bold">{price}</span>/day
            </h2>
          </div>
        </div>
        <nav>
          <ul className="host-nav">
            <li>
              <NavLink to={`.`} className="host-link" end>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink to={`pricing`} className="host-link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to={`photos`} className="host-link">
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
