import { createSlice } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:8000";

// Initial state
const initialState = {
  vans: [],
  selectedVan: null,
  filter: [],
  isLoading: false,
  error: null,
};

// const filteredVans = vans.filter((van) => filter.includes(van.type));

const vanSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    fetchingVans: (state) => {
      state.isLoading = true;
    },
    setVans: (state, action) => {
      state.vans = action.payload;
      state.isLoading = false;
    },
    fetchVansFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setVanDetail: (state, action) => {
      state.selectedVan = action.payload;
      state.isLoading = false;
    },
    setVanFilter: (state, action) => {
      const newFilter = action.payload;
      // If the filter is already in the list, remove it, else add it
      if (state.filter.includes(newFilter)) {
        state.filter = state.filter.filter((filter) => filter !== newFilter);
      } else {
        state.filter.push(newFilter);
      }
    },
    clearFilter(state) {
      state.filter = [];
    },
  },
});

// Thunk
export const fetchVans = () => async (dispatch) => {
  dispatch(fetchingVans());
  try {
    const res = await fetch(`${BASE_URL}/vans`);
    if (!res.ok) {
      throw new Error("Failed getting vans");
    }
    const vansData = await res.json();
    dispatch(setVans(vansData)); // Dispatching the action creator
  } catch (error) {
    dispatch(fetchVansFailed(error.message));
    console.error("Error fetching vans:", error);
  }
};

export const fetchVanDetail = (id) => async (dispatch) => {
  dispatch(fetchingVans());
  try {
    const res = await fetch(`${BASE_URL}/vans/${id}`);
    if (!res.ok) {
      throw new Error("Failed getting vans");
    }
    const vansData = await res.json();
    dispatch(setVanDetail(vansData)); // Dispatching the action creator
  } catch (error) {
    dispatch(fetchVansFailed(error.message));
    console.error("Error fetching vans:", error);
  }
};

export const {
  setVans,
  fetchingVans,
  fetchVansFailed,
  setVanDetail,
  setVanFilter,
  clearFilter,
} = vanSlice.actions;

export default vanSlice.reducer;
