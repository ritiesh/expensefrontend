import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

export const loginUser = createAsyncThunk("auth/login", async(data) => {
    const res = await API.post("/auth/login", data);
    return res.data;
});

const slice = createSlice({
    name: "auth",
    initialState: { token: null },

    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            localStorage.setItem("token", action.payload.token);
        });
    },
});

export default slice.reducer;