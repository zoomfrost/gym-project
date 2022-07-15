

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


const exerciseOptions: FetchOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': 'fde75d440fmsh7ca357a22a651e6p19cd65jsna6a19ab47c01',
    },
};
