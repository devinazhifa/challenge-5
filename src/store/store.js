import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";

const store = configureStore({
  reducer: {
    carSlice: carSlice.reducer,
  },
});

export default store;