// conteneur Unique qui stock l'etat global de l'application //
// declaration ou j'utilise redux//


import { configureStore } from '@reduxjs/toolkit'
import authReduceur from './features/auth/auth.slice.js'

export const store = configureStore({
  reducer: {},
})