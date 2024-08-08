import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const reducers = {
  storeData: (state, action) => {},
};

const products = createSlice({
  name: "Producs",
  initialState,
  reducers,
});

export default products.actions;//export for store

export const { storeData } = products.reducer;
