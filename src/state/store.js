import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/products/products.slice";
import singalProductDetailReducer from "./Slices/products/signalProductDetail.slice";
import addToCardReducer from "./Slices/products/addToCard.slice";
const store = configureStore({
  reducer: {
    product: productsReducer,
    singalProduct: singalProductDetailReducer,
    addToCards: addToCardReducer,
  },
});

export default store;
