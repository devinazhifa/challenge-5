import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "carCart",
  initialState: {
    carCart: null,
  },
  reducers: {
    addCarToCart: (state, action) => {
      state.carCart = action.payload.id;
    },
  },
});

export default carSlice;
