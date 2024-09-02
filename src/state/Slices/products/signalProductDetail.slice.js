import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productApi } from "../../../apis/productApi";

const initialState = {
  product: {},
  loading: false,
  error: "",
};

export const fetchSigleItem = createAsyncThunk(
  "product/fetchSingleItem",
  async (id) => {
    const response = await productApi(`products/${id}`, "get");
    return response;
  }
);
const singalProductDetail = createSlice({
  name: "singalProduct",
  initialState,
  reducers: {
    addSingalProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSigleItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSigleItem.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload.data;
        console.log("action : ", action.payload.data);
      })
      .addCase(fetchSigleItem.rejected, (state, action) => {
        console.log("error :=>", action.error);

        state.loading = false;
        state.error = action.error || "Something went wrong";
      });
  },
});
export const getSinleProduct = (state) => state.singalProduct.product;
export const { addSingalProduct } = singalProductDetail.actions;

export default singalProductDetail.reducer;
