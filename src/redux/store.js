import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/auth.slice';
import userReducer from './features/profile/profile.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;