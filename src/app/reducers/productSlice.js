import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/productsAction";

const productSlice = createSlice({
  name: "productsReducer",
  initialState: {
    products: [],
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
