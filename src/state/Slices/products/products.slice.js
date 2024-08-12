import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const reducers = {
  handleProductData: (state, action) => {
    state.products = state.products.push(action.payload);
  },
};

const products = createSlice({
  name: "Producs",
  initialState,
  reducers: {
    handleProductData: (state, action) => {
      console.log("aciton :",action);
      
    },
  },
});

export default products.actions; //export for store

export const { handleProductData } = products.reducer;
