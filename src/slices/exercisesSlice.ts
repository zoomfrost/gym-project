import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    bodyPart: [],
    exercises: [],
    selectedBodyPart: 'all'
}

const gymSlice = createSlice({
    name: 'gym',
    initialState,
    reducers: {
        gymSetSearch: (state, action) => {
            state.search = action.payload
        },
        gymSetBodyPart: (state, action) => {
            state.bodyPart = action.payload
        },
        gymSetExercises: (state, action) => {
            state.exercises = action.payload
        },
        gymSetSelectedBodyPart: (state, action) => {
            state.selectedBodyPart = action.payload
        }
    }
});

const {actions, reducer} = gymSlice;

export default reducer;

export const {
    gymSetSearch,
    gymSetBodyPart,
    gymSetExercises,
    gymSetSelectedBodyPart
} = actions