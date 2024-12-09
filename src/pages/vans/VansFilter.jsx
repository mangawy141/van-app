import { useDispatch, useSelector } from "react-redux";
import { clearFilter, setVanFilter } from "./vanSlice-2";
import { useSearchParams } from "react-router-dom";

function VansFilter() {
  const dispatch = useDispatch();
  const { filter } = useSelector((store) => store.vans);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(btnFilter) {
    dispatch(setVanFilter(btnFilter)); // Update Redux state

    // Decode the current 'filtered' query parameter from the URL
    const currentFilters = searchParams.get("filtered")
      ? decodeURIComponent(searchParams.get("filtered")).split(",")
      : [];

    // Update the filters based on whether the button was clicked
    let updatedFilters;
    if (currentFilters.includes(btnFilter)) {
      // Remove filter if already applied
      updatedFilters = currentFilters.filter((filter) => filter !== btnFilter);
    } else {
      // Add new filter
      updatedFilters = [...currentFilters, btnFilter];
    }

    // Update the URL with the updated filters
    setSearchParams({ filtered: updatedFilters.join(",") });
  }

  function clearAllFilters() {
    dispatch(clearFilter());
    setSearchParams({}); // Clear URL filters
  }

  return (
    <div className="flex-align-center filter-container">
      <div className="flex-align-center filter-list">
        <button
          className={`btn btn-filter ${
            filter.includes("simple") ? "simple-type text-white" : ""
          }`}
          onClick={() => handleFilter("simple")}
        >
          Simple
        </button>
        <button
          className={`btn btn-filter ${
            filter.includes("luxury") ? "luxury-type text-white" : ""
          }`}
          onClick={() => handleFilter("luxury")}
        >
          Luxury
        </button>
        <button
          className={`btn btn-filter ${
            filter.includes("rugged") ? "rugged-type text-white" : ""
          }`}
          onClick={() => handleFilter("rugged")}
        >
          Rugged
        </button>
      </div>
      <button className="back-btn" onClick={clearAllFilters}>
        Clear filters
      </button>
    </div>
  );
}

export default VansFilter;
