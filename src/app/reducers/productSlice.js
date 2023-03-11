import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productsReducer",
  initialState: {
    products: [
      { id: 0, name: "Shoes", desc: "Best shoes for men", price: 300 },
      { id: 1, name: "Cap", desc: "Best Cap for men", price: 50 },
    ],
  },
  reducers: {},
  extraReducers: {},
});

export default productSlice.reducer;
