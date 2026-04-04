import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import dashboardReducer from "../features/dashboardSlice";
import expenseReducer from "../features/expenseSlice";
import chatReducer from "../features/chatSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashboardReducer,
        expense: expenseReducer,
        chat: chatReducer,
    },
});