import { createAsyncThunk } from "@reduxjs/toolkit";

// action de déconnexion (synchrone) - c'est plutôt un reducer ici

  export const logoutAction = (state) => {
    state.token = null;
    localStorage.removeItem('token');
  }

// action de connexion (asynchrone) : j'ai besoin d'une réponse de la part du serveur
export const loginAction = createAsyncThunk(
  'auth/login',
  async (entryPayload, { rejectWithValue }) => {
    const res = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
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

