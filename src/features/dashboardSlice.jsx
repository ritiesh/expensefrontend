import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const fetchDashboard = createAsyncThunk(
  "dashboard/get",
  async (userId) => {
    const res = await API.get(`/dashboard/${userId}`);
    return res.data;
  }
);

const slice = createSlice({
  name: "dashboard",
  initialState: { data: null },

  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default slice.reducer;