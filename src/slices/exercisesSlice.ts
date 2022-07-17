import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bodyPart: [],
    exercises: [],
    selectedBodyPart: 'all',
    currentPage: 1,
}

const gymSlice = createSlice({
    name: 'gym',
    initialState,
    reducers: {
        gymSetBodyPart: (state, action) => {
            state.bodyPart = action.payload
        },
        gymSetExercises: (state, action) => {
            state.exercises = action.payload
        },
        gymSetSelectedBodyPart: (state, action) => {
            state.selectedBodyPart = action.payload
        },
        gymSetCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    }
});

const {actions, reducer} = gymSlice;

export default reducer;

export const {
    gymSetBodyPart,
    gymSetExercises,
    gymSetSelectedBodyPart,
    gymSetCurrentPage,
} = actions