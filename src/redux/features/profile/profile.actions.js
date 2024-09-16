import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk pour récupérer les données du profil utilisateur
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token,{rejectWithValue}) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.body;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  
  });
  
  // Thunk pour mettre à jour les données du profil utilisateur
  export const updateUserData = createAsyncThunk('user/updateUserData', async ({ token, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile',
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.body;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  });