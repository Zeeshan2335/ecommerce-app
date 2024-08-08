import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/products/products.slice";

const store = configureStore({
  reducer: { productData: productsReducer },
});

export default store;
