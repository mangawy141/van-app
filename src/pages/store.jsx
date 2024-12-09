import { configureStore } from "@reduxjs/toolkit";
import vanSlice from "./vans/vanSlice-2";
import hostSlice from "./host/hostSlice";

const store = configureStore({
  reducer: {
    vans: vanSlice,
    host: hostSlice,
  },
});
export default store;
