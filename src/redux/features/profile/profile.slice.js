import { createSlice } from "@reduxjs/toolkit";
import { updateUserData, fetchUserData } from "./profile.actions";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  userName: "",
  id: "",
  createdAt: "",
  updatedAt: "",
  errorMessage: null,
  isLoading: false,
};

const profileSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return { ...initialState };
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
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        state.createdAt = action.payload.createdAt;
        state.updatedAt = action.payload.updatedAt;
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
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload || "Failed to update profile";
      });
  },
});

export const { setUser, clearUser, updateUserName } = profileSlice.actions;
export default profileSlice.reducer;
