import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

const singalProductDetail = createSlice({
  name: "singalProduct",
  initialState,
  reducers: {
    addSingalProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addSingalProduct } = singalProductDetail.actions;

export default singalProductDetail.reducer;
