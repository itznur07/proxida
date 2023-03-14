import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product", async (id) => {
  const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  console.log(res.data);
  return res.data;
});
