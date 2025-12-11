import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null,
        userId: localStorage.getItem("userId") || null,
        email: localStorage.getItem("email") || null,
    },

    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.email = action.payload.email;

            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("userId", action.payload.userId);
            localStorage.setItem("email", action.payload.email);
        },

        logout(state) {
            state.token = null;
            state.userId = null;
            state.email = null;

            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            localStorage.removeItem("email");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
