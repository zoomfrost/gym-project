import { useQuery } from "react-query";

export interface FetchOptions {
    method: string,
    headers: {
        'X-RapidAPI-Host': string,
        'X-RapidAPI-Key': string
    }
}

export interface FetchExercisesReturn {
    isLoading: boolean,
    error: unknown,
    data: any
}

const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises';

const exerciseOptions: FetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'fde75d440fmsh7ca357a22a651e6p19cd65jsna6a19ab47c01',
    },
};

export function useFetchExercises(url:string, apiName: string, options=exerciseOptions): FetchExercisesReturn {
    const { isLoading, error, data } = useQuery(apiName, () => 
        fetch(url, options).then(res =>
            res.json()
        ),
        {
            cacheTime: 10 * 60 * 1000,
            staleTime: 5 * 60 * 1000
        }
    )

    return {
        isLoading,
        error,
        data
    }
}