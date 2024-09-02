import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productApi } from "../../../apis/productApi";

// fetch api using async thunk
export const fetchProducts = createAsyncThunk(
  "product/fetchItmes",
  async () => {
    const response = await productApi("products", "get");
    return response;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload?.data?.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Somethig went wrong!!";
      });
  },
});

export const getLoadingFlag = (state) => state?.product?.loading;
export const getProductItems = (state) => state?.product?.products;

export default products.reducer; //export for store

export const { handleProductData, makeWishToBuy } = products.actions;
