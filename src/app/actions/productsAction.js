import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products", async () => {
  const res = await axios.get("https://api.escuelajs.co/api/v1/products");
  return res.data;
});
