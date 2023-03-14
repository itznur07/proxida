import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../actions/productsAction";

const productSlice = createSlice({
  name: "productReducer",
  initialState: {
    product: {},
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      console.log(action.payload);
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
