import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:8000";

const hostSlice = createSlice({
  name: "host",
  initialState: {
    rentedVan: {},
    listedHosts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setRentedVan: (state, action) => {
      state.rentedVan = action.payload;
    },
    setListedHosts: (state, action) => {
      // Check if the host already exists to avoid duplicates
      const isDuplicate = state.listedHosts.some(
        (host) => host.id === action.payload.id
      );
      if (!isDuplicate) {
        state.listedHosts.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRentedVan.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postRentedVan.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rentedVan = action.payload;
      })
      .addCase(postRentedVan.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Thunk for posting the rented van to the hosts JSON
export const postRentedVan = createAsyncThunk(
  "host/postRentedVan",
  async (_, { dispatch, getState, rejectWithValue }) => {
    const selectedVan = getState().vans.selectedVan;

    if (!selectedVan) {
      return rejectWithValue("No van selected to rent!");
    }

    dispatch(setRentedVan(selectedVan));

    try {
      // Step 1: Fetch current hosts
      const response = await fetch(`${BASE_URL}/hosts`);
      const hosts = await response.json();

      // Step 2: Check if the host exists
      const hostIndex = hosts.findIndex(
        (host) => host.id === selectedVan.hostId
      );

      if (hostIndex !== -1) {
        // Host exists, update their data with the selected van
        const updatedHost = {
          ...hosts[hostIndex],
          ...selectedVan, // Merge van details into host object
        };

        await fetch(`${BASE_URL}/hosts/${updatedHost.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedHost),
        });
      } else {
        // Host does not exist, create a new host object
        const newHost = {
          id: selectedVan.hostId,
          name: selectedVan.hostName, // Assuming host name exists in `selectedVan`
          ...selectedVan, // Copy van details into the new host
        };

        await fetch(`${BASE_URL}/hosts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newHost),
        });

        dispatch(setListedHosts(newHost));
      }

      return selectedVan;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { setRentedVan, setListedHosts } = hostSlice.actions;
export default hostSlice.reducer;
