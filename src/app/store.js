import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import productsSlice from "./reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
  },
});

export default store;
