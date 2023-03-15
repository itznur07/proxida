import { configureStore } from "@reduxjs/toolkit";
import productCeteSlice from "./reducers/productCeteSlice";
import productSlice from "./reducers/productSlice";
import productsSlice from "./reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    cetegories: productCeteSlice,
  },
});

export default store;
