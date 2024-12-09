import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Van from "./Van";
import { setVanFilter, clearFilter } from "./vanSlice-2";

function VansList() {
  const { vans, filter } = useSelector((store) => store.vans);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Sync filters from the URL to Redux state
  useEffect(() => {
    const filtersFromUrl = searchParams.get("filtered")
      ? decodeURIComponent(searchParams.get("filtered")).split(",")
      : [];

    // Clear existing filters and apply new ones
    dispatch(clearFilter());
    filtersFromUrl.forEach((filter) => dispatch(setVanFilter(filter)));
  }, [searchParams, dispatch]);

  // Determine which vans to display based on filters
  const filteredVans = vans.filter((van) => {
    if (filter.length > 0) {
      return filter.includes(van.type); // Use Redux filter if set
    }
    return true; // If no filter, show all vans
  });

  // Display the list of vans
  return (
    <div className="van-list">
      {filteredVans.length > 0 ? (
        filteredVans.map((vanObj) => <Van vanObj={vanObj} key={vanObj.id} />)
      ) : (
        <p>No vans match your filter criteria.</p>
      )}
    </div>
  );
}

export default VansList;
