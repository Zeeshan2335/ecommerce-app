import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/products/products.slice";
import singalProductDetailReducer from "./Slices/products/signalProductDetail.slice";

const store = configureStore({
  reducer: {
    product: productsReducer,
    singalProduct: singalProductDetailReducer,
  },
});

export default store;
