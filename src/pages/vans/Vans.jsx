import { useEffect } from "react";
import VansList from "./VansList";
import VansFilter from "./VansFilter";
import Spinner from "../../ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchVans } from "./vanSlice-2";

function Vans() {
  const { isLoading } = useSelector((store) => store.vans);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVans());
  }, [dispatch]);

  return (
    <main>
      <div className="container vans-container">
        <h1 className="hero-header">Explore our van options</h1>
        <VansFilter />
        {isLoading ? <Spinner /> : <VansList />}
      </div>
    </main>
  );
}

export default Vans;
