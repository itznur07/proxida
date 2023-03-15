import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductCetegories = createAsyncThunk("cetegories", async () => {
  const res = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
  console.log(res.data);
  return res.data;
});
