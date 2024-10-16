import { createSlice } from '@reduxjs/toolkit';
import { logoutAction, loginAction } from './auth.actions';

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        token: localStorage.getItem('token'),
        errorMessage: null,
        isLoading: false, 
    },
    reducers: {
        logout: logoutAction
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
export const { login, logout } = authSlice.actions;
export { authSlice }

