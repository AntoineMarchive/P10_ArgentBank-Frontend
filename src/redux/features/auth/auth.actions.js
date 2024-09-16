import { createAsyncThunk } from "@reduxjs/toolkit";

// action de deconnexion = synchrone
export const logoutAction = (state) => {
    state.token = null;
}

// action de connexion = asynchrone : j'ai besoin d'une réponse de la part du serveur
export const loginAction = createAsyncThunk(
  'auth/login',
  async (entryPayload, { rejectWithValue }) => {
    const res = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryPayload),
    });

    const data = await res.json();

    // dans le cas de l'échec, j'appelle rejectWithValue avec un message d'erreur
    if (!res.ok) {
      return rejectWithValue(data.body.message);
    }

    // sinon, dans le cas de la réussite, je retourne le token
    return data.body.token;
  }
);

