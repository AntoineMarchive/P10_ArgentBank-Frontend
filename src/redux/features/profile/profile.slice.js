import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from '../profile/profile.actions.js';

const initialState = {
  firstName: "",
  lastName: "",
  loading: false,
  error: null,
  isEditing: false,
};

const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      toggleEditForm: (state) => {
        state.isEditing = !state.isEditing;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.loading = false;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.error = action.error.message;
          state.loading = false;
        })
        .addCase(updateUserData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
          state.loading = false;
          state.isEditing = false;
        })
        .addCase(updateUserData.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        });
    },
});

export default profileSlice.reducer;
export const { toggleEditForm } = userSlice.actions;
