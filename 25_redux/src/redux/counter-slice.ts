import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increament(state) {
      state.count++;
    },
    decreament(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increament, decreament, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
