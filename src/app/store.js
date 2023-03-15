import { configureStore } from "@reduxjs/toolkit";
import productCeteSlice from "./reducers/productCeteSlice";
import productFilterSlice from "./reducers/productFilterSlice";
import productSlice from "./reducers/productSlice";
import productsSlice from "./reducers/productsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
    filter: productFilterSlice,
    cetegories: productCeteSlice,
  },
});

export default store;
