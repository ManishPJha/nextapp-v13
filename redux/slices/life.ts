import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const lifeslice = createSlice({
  name: "life",
  initialState: {
    life: 5,
  },

  reducers: {
    increment: (state) => {
      state.life += 1;
    },

    decrement: (state) => {
      state.life -= 1;
    },
  },
});

export const { increment, decrement } = lifeslice.actions;

export default lifeslice;
