import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "../api/exercisesApi";
import gym from '../slices/exercisesSlice';

const store = configureStore({
    reducer: {
        gym,
        [exercisesApi.reducerPath]: exercisesApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(exercisesApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>

export default store;