import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { storeData } = counterSlice.actions;

export default counterSlice.reducer;
