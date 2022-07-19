import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "../api/exercisesApi";
import { youTubeApi } from "../api/youTubeApi";
import gym from '../slices/exercisesSlice';
import { exercisesInsApi } from "../api/exercisesInstrucApi";

const store = configureStore({
    reducer: {
        gym,
        [exercisesApi.reducerPath]: exercisesApi.reducer,
        [youTubeApi.reducerPath]: youTubeApi.reducer,
        [exercisesInsApi.reducerPath]: exercisesInsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(exercisesApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>

export default store;