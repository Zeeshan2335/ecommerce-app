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
    makeWishToBuy: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload.id
          ? (item.isWishToBuy = action.payload.flag)
          : item
      );
    },
  },
});

export default products.reducer; //export for store

export const { handleProductData, makeWishToBuy } = products.actions;
