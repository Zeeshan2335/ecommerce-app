import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slices/products/products.slice";
import singalProductDetailReducer from "./Slices/products/signalProductDetail.slice";
import addToCardReducer from "./Slices/products/addToCard.slice";

// function logger(store) {
//   return function (next) {
//     return function (action) {
//       console.log("store :", store);
//       console.log("next :", next);
//       console.log("action :", action);
//       next(action);
//     };
//   };
// }
//es6 
// const logger = (store) => (next) => (action) => {
//   console.log("store :", store);
//   console.log("next :", next);
//   console.log("action :", action);

//   next(action);
// };

const store = configureStore({
  reducer: {
    product: productsReducer,
    singalProduct: singalProductDetailReducer,
    addToCards: addToCardReducer,
  },

  middleware: (getMiddleware) => [...getMiddleware()]
    // getMiddleware().concat(logger),

});

export default store;
