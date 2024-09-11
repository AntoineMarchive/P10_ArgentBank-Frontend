import { createAsyncThunk } from "@reduxjs/toolkit";

// action de deconnexion = synchrone
export const lougoutAction = (state) => {
    state.token = null;
}

//action de connexion = asynchrone : j'ai besoin d'une réponse de la part du serveur
export const loginAction = createAsyncThunk('auth/login', async (entryPayload, { rejectWithValue })
    const res = await fetch('http:localhost:3001/api/v1/user/signin', {
        method: 'POST',
        body: JSON.stringify(entryPayload)
    })

    const data = await res.json();

    //dans le cas de l'échec, j'appele rectWithValue en lui donnant une payload de sorte qui est égale au message d'erreur donné par le serveur
    if(!res.ok) {
        return rejectWithValue(data.body.mesage)
    }

    //sinon, dans le cas de la réussite, mon action retourne une payload de reussite qui est égale au token
    return data.body.token;
)