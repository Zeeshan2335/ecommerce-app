import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const products = createSlice({
  name: "Producs",
  initialState,
  reducers: {
    handleProductData: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default products.reducer; //export for store

export const { handleProductData } = products.actions;
