import { createSlice, crerateSlice } from '@reduxjs/toolkit'
import { logoutAction, loginAction } from './auth.actions.js'
import { access } from 'fs';

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        token: null,
        errorMessage: null,
        loading: false
    },
    //ici lister mes actions synchrones
    reducers: {
        logoutt: lougoutAction
    },
    //ici, j'écoutes Mes action asynchrones
    extraReducers: (builder) => {
        //ici : action de login dans le cas d'attente (pending)
        builder.addCase(loginAction.prending, (currentState) => {
            currentState.isLoading = true;
            currentState.errorMessage = null;
        });
        //ici : action de login dans le cas de la réussite (fulfilled)
        builder.addCase(loginAction.fulfilled, (currentState, action) => {
            currentState.isLoading = false;
            currentState.token = action.payload
        });
        //ici : action de login dans le cas de l'échec (rejected)
        builder.addCase(loginAction.rejected, (currentState, action) => {
            currentState.isLoading = false;
            currentState.errorMessage = action.payload;
        });
    }
})

export default authSlice.reducer