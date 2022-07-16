import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export interface FetchHeaders {
    headers: {
        'X-RapidAPI-Host': string
        'X-RapidAPI-Key': string
    }
}


export const exerciseHeaders = {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'c548f3d7bbmsh3d260716ca14f97p10f911jsn422616da69d7'
};

// c548f3d7bbmsh3d260716ca14f97p10f911jsn422616da69d7
// fde75d440fmsh7ca357a22a651e6p19cd65jsna6a19ab47c01

const baseUrl = 'https://exercisedb.p.rapidapi.com';
const createRequest = (url: string) => ({url, headers: exerciseHeaders});


export const exercisesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Exercises'],
    endpoints: (builder) => ({
        getExercises: builder.query({
            query: (url) => createRequest(url)
        })
    })
});


export const {
    useGetExercisesQuery
} = exercisesApi;