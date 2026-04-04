import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const addExpense = createAsyncThunk(
  "expense/add",
  async ({ userId, data }) => {
    const res = await API.post(`/expenses/${userId}`, data);
    return res.data;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addExpense.pending, (state) => {
        state.loading = true;
      })
      .addCase(addExpense.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addExpense.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default expenseSlice.reducer; // 🔥 THIS LINE FIXES ERROR