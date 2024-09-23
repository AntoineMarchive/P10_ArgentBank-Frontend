import { createSlice } from "@reduxjs/toolkit";
import { updateUserData, fetchUserData } from "./profile.actions";

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  errorMessage: null,
  isLoading: false,
  isEditing: false
};

const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsEditing: (state) => {
      state.isEditing = !state.isEditing;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to fetch user details";
      })
      .addCase(updateUserData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userName = action.payload.userName;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to update profile";
      });
  },
});

export const { toggleIsEditing, setUser, clearUser, updateUserName } = profileSlice.actions;
export default profileSlice.reducer;
