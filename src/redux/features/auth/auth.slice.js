import { createSlice } from '@reduxjs/toolkit';
import { loginAction } from './auth.actions.js';

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        token: null,
        errorMessage: null,
        isLoading: false, 
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.errorMessage = null;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(loginAction.pending, (state) => {
            state.isLoading = true;
            state.errorMessage = null;
          })
          .addCase(loginAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload;
          })
          .addCase(loginAction.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload;
          });
    }
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
