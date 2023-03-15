import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productsAction";

const productFilterSlice = createSlice({
  name: "filterReducer",
  initialState: {
    productContainer: [],
    productFilter: [],
    loading: false,
    error: {},
  },
  reducers: {
    filteredProduct: (state, action) => {
      state.productContainer = state.productFilter.filter((product) =>
        product.title.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productContainer = action.payload;
      state.productFilter = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { filteredProduct } = productFilterSlice.actions;
export default productFilterSlice.reducer;
