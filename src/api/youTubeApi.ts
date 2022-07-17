import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export interface FetchHeaders {
    headers: {
        'X-RapidAPI-Host': string
        'X-RapidAPI-Key': string
    }
}


export const exerciseHeaders = {
    'X-RapidAPI-Key': 'c548f3d7bbmsh3d260716ca14f97p10f911jsn422616da69d7',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
};


const baseUrl = 'https://youtube-search-and-download.p.rapidapi.com';
const createRequest = (url: string) => ({url, headers: exerciseHeaders});


export const youTubeApi = createApi({
    reducerPath: 'youtubeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes: ['Videos'],
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: (url) => createRequest(url)
        })
    })
});


export const {
    useGetVideosQuery
} = youTubeApi;