import { createSlice } from "@reduxjs/toolkit";
import { getProductCetegories } from "../actions/productGetegories";


const productSlice = createSlice({
  name: "getProductCetegories",
  initialState: {
    cetegories: [],
    loading: false,
    error: {},
  },
  reducers: {},
  extraReducers: {
    [getProductCetegories.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductCetegories.fulfilled]: (state, action) => {
      state.loading = false;
      state.cetegories = action.payload;
      console.log(action.payload);
    },
    [getProductCetegories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
