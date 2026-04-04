import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const sendMessage = createAsyncThunk(
  "chat/send",
  async ({ userId, question }) => {
    const res = await API.post(`/chat/${userId}`, { question });
    return res.data;
  }
);

const slice = createSlice({
  name: "chat",
  initialState: { response: "" },

  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.response = action.payload;
    });
  },
});

export default slice.reducer;