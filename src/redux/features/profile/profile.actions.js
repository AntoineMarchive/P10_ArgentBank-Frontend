import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk pour récupérer les données du profil utilisateur
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (!res.ok) {
        return rejectWithValue(data.message || "An error occurred");
      }

      return data.body;
    } catch (e) {
      return rejectWithValue(e.message || "Something went wrong");
    }
  }
);

// Thunk pour mettre à jour les données du profil utilisateur
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({ userName, token }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName }),  // Envoyer uniquement le userName
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(data.message || "An error occurred");
      }

      return data.body;
    } catch (e) {
      return rejectWithValue(e.message || "Something went wrong");
    }
  }
);
