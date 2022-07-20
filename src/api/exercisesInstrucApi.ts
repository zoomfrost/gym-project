import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const exerciseInsHeaders = {
    'X-Api-Key': 'rhphRzRCYGE9D2dVytLPDw==BxIaz8Y3r29dvJoN'
}

const baseUrl = 'https://api.api-ninjas.com/v1';

const createRequest = (url: string) => ({url, headers: exerciseInsHeaders});


export const exercisesInsApi = createApi({
    reducerPath: 'exercisesInsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['ExercisesInstruc'],
    endpoints: (builder) => ({
        getIns: builder.query({
            query: (url) => createRequest(url)
        })
    })
});


export const {
    useGetInsQuery
} = exercisesInsApi
