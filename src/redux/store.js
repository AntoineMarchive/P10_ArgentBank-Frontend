import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './features/auth/auth.slice.js';
import profileReducer from './features/profile/profile.slice.js';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: profileReducer,
  },
});
