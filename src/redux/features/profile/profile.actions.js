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
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await res.json();
    console.log("API Response:", data);

    if (!res.ok) {
        return rejectWithValue(data.message || "An error occurred");
        
    }
      return response.data.body;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

// Thunk pour mettre à jour les données du profil utilisateur
export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { firstName, lastName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.body;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);
